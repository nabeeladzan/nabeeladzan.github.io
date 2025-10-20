# Personal Website

This is the source code for my personal website, [nabeeladzan.github.io](https://nabeeladzan.github.io/).

## Development

To run the website locally, follow these steps:

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The website will be available at `http://localhost:4060`.

## Caddy Configuration

If you are using Caddy to proxy requests to the development server, add the following to your Caddyfile:

```
your-domain.com {
    reverse_proxy localhost:4060
}
```

Replace `your-domain.com` with your actual domain name.

## Projects

To add a new project to the "Projects" page, create a new `.yml` file in the `projects` directory with the following format:

```yml
name: "Project Name"
description: "A short description of the project."
long_description: "A longer description of the project."
url: "https://example.com/project-url"
```

## Systemd Service

To run the development server as a systemd service, create a file named `vite-dev-server.service` in `/etc/systemd/system/` with the following content:

```
[Unit]
Description=Vite Development Server
After=network.target

[Service]
User=root
WorkingDirectory=/root/projects/nabeeladzan.github.io
ExecStart=/usr/bin/npm run dev
Restart=always

[Install]
WantedBy=multi-user.target
```

Then, reload systemd, enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable vite-dev-server.service
sudo systemctl start vite-dev-server.service
```

## Git Post-Receive Hook

To automatically restart the server after a git push, create a `post-receive` hook in your bare git repository's `hooks` directory with the following content:

```bash
#!/bin/sh
git --work-tree=/root/projects/nabeeladzan.github.io --git-dir=/root/projects/nabeeladzan.github.io/.git checkout -f
sudo systemctl restart vite-dev-server.service
```

Make sure to make the hook executable:

```bash
chmod +x .git/hooks/post-receive
```