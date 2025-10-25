import type { Theme } from '@components/ThemeProvider.tsx'
import type { AppRoute } from '@/app/routes.ts'

export type CommandRegistry = {
  list: () => string[]
  execute: (input: string) => void
}

type CommandContext = {
  args: string[]
}

type CommandHandler = (context: CommandContext) => void

type CommandDependencies = {
  pages: Pick<AppRoute, 'label' | 'path'>[]
  addLine: (line: string) => void
  clearHistory: () => void
  navigate: (path: string) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  openExternal: (url: string) => void
  requestExit: () => void
}

const SOCIAL_LINKS = {
  github: 'https://github.com/nabeeladzan',
  linkedin: 'https://linkedin.com/in/nabeeladzan',
  twitter: 'https://twitter.com/nabeeladzan',
  instagram: 'https://instagram.com/nabeel_adzan',
} satisfies Record<string, string>

export function createCommandRegistry({
  pages,
  addLine,
  clearHistory,
  navigate,
  theme,
  setTheme,
  openExternal,
  requestExit,
}: CommandDependencies): CommandRegistry {
  const pageByLabel = new Map(pages.map(({ label, path }) => [label, path]))

  const commands = new Map<string, CommandHandler>()

  const register = (name: string, handler: CommandHandler) => {
    commands.set(name, handler)
  }

  register('help', () => {
    const available = Array.from(commands.keys()).sort().join(', ')
    addLine(`Available commands: ${available}`)
  })

  register('clear', () => {
    clearHistory()
  })

  register('exit', () => {
    requestExit()
  })

  register('version', () => {
    addLine('Melancholied version 1.0.0')
  })

  register('status', () => {
    addLine('System status: All systems operational.')
  })

  register('ls', () => {
    addLine(pages.map(({ label }) => label).join('  '))
  })

  register('cat', ({ args }) => {
    const [pageLabel] = args
    if (!pageLabel) {
      addLine('Usage: cat <page>')
      return
    }

    const targetPath = pageByLabel.get(pageLabel)
    if (!targetPath) {
      addLine(`cat: ${pageLabel}: No such file or directory`)
      return
    }

    navigate(targetPath)
  })

  register('theme', ({ args }) => {
    const [requested] = args
    if (!requested) {
      addLine(`Theme is set to ${theme}. Available themes: dark, light, system`)
      return
    }

    if (requested === 'dark' || requested === 'light' || requested === 'system') {
      setTheme(requested)
      addLine(`Theme set to ${requested}`)
      return
    }

    addLine('Invalid theme. Available themes: dark, light, system')
  })

  Object.entries(SOCIAL_LINKS).forEach(([commandName, url]) => {
    register(commandName, () => {
      addLine(`Opening ${commandName} profile...`)
      openExternal(url)
    })
  })

  pages.forEach(({ label, path }) => {
    register(label, () => {
      addLine(`Navigating to ${label}...`)
      navigate(path)
    })
  })

  const execute = (input: string) => {
    if (!input.trim()) return

    const [rawCommand, ...args] = input.trim().split(/\s+/)
    const commandName = rawCommand.toLowerCase()
    const handler = commands.get(commandName)

    if (!handler) {
      addLine(`Command not recognized: ${input}`)
      return
    }

    handler({ args })
  }

  return {
    list: () => Array.from(commands.keys()).sort(),
    execute,
  }
}
