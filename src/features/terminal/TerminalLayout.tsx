import { useEffect, useMemo, useRef } from 'react'
import { Moon, Sun } from 'lucide-react'
import type { ReactNode } from 'react'
import type { AppRoute } from '@/app/routes.ts'
import { useTheme } from '@components/ThemeProvider.tsx'
import { useTerminalHistoryStore } from '@stores/TerminalHistoryStore.ts'
import { useTerminalController } from './useTerminalController'

const EXIT_COUNTDOWN = ['Exiting terminal... 3', 'Exiting terminal... 2', 'Exiting terminal... 1 Goodbye!']

export type TerminalLayoutProps = {
  routes: Pick<AppRoute, 'label' | 'path'>[]
  navigate: (path: string) => void
  children?: ReactNode
}

export function TerminalLayout({ routes, navigate, children }: TerminalLayoutProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme, setTheme } = useTheme()
  const { terminalHistory, addLineToHistory, clearHistory } = useTerminalHistoryStore()

  const browserInfo = useMemo(() => {
    if (typeof navigator === 'undefined') return ''
    return navigator.userAgent.toLowerCase()
  }, [])

  const openExternal = (url: string) => {
    if (typeof window === 'undefined') return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const requestExit = () => {
    if (typeof window === 'undefined') return
    EXIT_COUNTDOWN.forEach((line, index) => {
      window.setTimeout(() => {
        addLineToHistory(line)
        if (index === EXIT_COUNTDOWN.length - 1) {
          window.setTimeout(() => {
            if (!browserInfo) return
            if (browserInfo.includes('firefox')) {
              window.location.href = 'about:newtab'
            } else if (browserInfo.includes('safari')) {
              window.location.href = 'about:blank'
            } else if (browserInfo.includes('chrome') || browserInfo.includes('chromium')) {
              window.location.href = 'chrome://new-tab-page/'
            }
          }, 500)
        }
      }, index * 1000)
    })
  }

  const controller = useTerminalController({
    pages: routes,
    addLine: addLineToHistory,
    clearHistory,
    navigate,
    openExternal,
    requestExit,
    theme,
    setTheme,
  })

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleFocus = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (!inputRef.current) return
      if (target && inputRef.current.contains(target)) return
      inputRef.current.focus()
    }

    document.addEventListener('click', handleFocus)
    return () => document.removeEventListener('click', handleFocus)
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <header className="relative z-30 flex w-full items-center justify-between px-4 py-3">
        <nav className="flex flex-wrap gap-3">
          {routes.map((route) => (
            <button
              key={route.path}
              type="button"
              onClick={() => navigate(route.path)}
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <span className="text-xl font-medium bg-gradient-to-r from-blue-400 to-sky-600 bg-clip-text text-transparent">
                {route.label}
              </span>
            </button>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-muted"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </header>

      <div className="relative flex w-full flex-1">
        <SuggestionsPanel
          suggestions={controller.suggestions}
          highlightedIndex={controller.highlightedIndex}
        />
        <HistoryPanel lines={terminalHistory} />
        <main className="z-10 flex flex-1 items-center justify-center px-6 py-10">
          {children}
        </main>
      </div>

      <footer className="z-20 w-full border-t border-border bg-background px-4 py-3">
        <input
          ref={inputRef}
          type="text"
          value={controller.input}
          onChange={(event) => controller.handleInputChange(event.target.value)}
          placeholder="Type your command here..."
          className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              const highlighted = controller.acceptHighlighted()
              if (highlighted) {
                controller.runCommand(highlighted)
                controller.resetInput()
                return
              }
              controller.handleSubmit()
              return
            }

            if (event.key === 'Escape') {
              controller.resetInput()
              return
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault()
              controller.highlightPrevious()
              return
            }

            if (event.key === 'ArrowDown') {
              event.preventDefault()
              controller.highlightNext()
              return
            }

            if (event.key === 'Tab') {
              event.preventDefault()
              if (controller.suggestions.length === 1) {
                controller.handleInputChange(controller.suggestions[0])
              } else {
                controller.highlightNext()
              }
            }
          }}
        />
      </footer>
    </div>
  )
}

type SuggestionsPanelProps = {
  suggestions: string[]
  highlightedIndex: number
}

function SuggestionsPanel({ suggestions, highlightedIndex }: SuggestionsPanelProps) {
  if (suggestions.length === 0) return null

  return (
    <aside className="pointer-events-none absolute bottom-4 left-4 hidden flex-col gap-2 rounded-md bg-card/90 p-3 shadow-lg sm:flex">
      {suggestions.map((suggestion, index) => (
        <span
          key={suggestion}
          className={`text-sm ${highlightedIndex === index ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
        >
          {suggestion}
        </span>
      ))}
    </aside>
  )
}

type HistoryPanelProps = {
  lines: string[]
}

function HistoryPanel({ lines }: HistoryPanelProps) {
  if (lines.length === 0) return null

  return (
    <section className="pointer-events-none absolute inset-x-0 bottom-4 hidden max-h-[40vh] flex-col gap-1 overflow-hidden px-4 text-sm text-muted-foreground sm:flex">
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className="truncate"
          style={{ opacity: 1 - (lines.length - index) / 8 }}
        >
          {line}
        </span>
      ))}
    </section>
  )
}
