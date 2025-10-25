# Development Dockerfile for Vite (supports npm and pnpm)
# - Binds Vite to 0.0.0.0 so the host can access the dev server
# - Installs dependencies inside the image but expects the project source
#   to be mounted as a volume in docker-compose for live reload
#
# Example docker-compose service (not included here):
# services:
#   web:
#     build: .
#     volumes:
#       - ./:/app
#       - /app/node_modules
#     ports:
#       - "5173:5173"
#     environment:
#       - CHOKIDAR_USEPOLLING=true
#     command: npm run dev -- --host 0.0.0.0 --port 5173
#
# Note: Mounting the project directory as a volume keeps live reloading working
# while the node_modules directory stays from the image (mounted as anonymous).
FROM node:20-alpine

# Helpful tools (git may be required by some packages)
RUN apk add --no-cache git openssh

WORKDIR /app

# Copy lockfiles / package.json first for efficient caching
# We include both npm and pnpm lockfiles so the image can install using either.
COPY package.json package-lock.json pnpm-lock.yaml* ./

# Enable corepack to support pnpm if pnpm-lock.yaml exists.
# Install dependencies using pnpm (if pnpm-lock exists) or npm (if package-lock exists),
# otherwise fall back to `npm install`.
RUN corepack enable && \
    if [ -f pnpm-lock.yaml ]; then \
      corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile --prefer-offline; \
    elif [ -f package-lock.json ]; then \
      npm ci --silent; \
    else \
      npm install --silent; \
    fi

# Copy the rest of the project files.
# In typical dev usage you'll mount your project over /app as a volume from docker-compose,
# but copying here enables the image to have a working snapshot and allows dependency install to cache.
COPY . .

# Create a non-root user for improved security and set ownership
RUN addgroup -S app && adduser -S app -G app && chown -R app:app /app
USER app

# Vite default dev port
EXPOSE 5173

# Ensure vite binds to the container interface and file changes are detected.
ENV HOST=0.0.0.0
ENV PORT=5173
# Some Docker environments require polling for file change detection (uncomment in compose if needed)
ENV CHOKIDAR_USEPOLLING=true
ENV NODE_ENV=development

# Start the dev server, forcing host binding so it's reachable from host machine
CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --port 5173"]
