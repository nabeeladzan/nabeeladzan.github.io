import { useCallback, useMemo, useState } from 'react'
import { createCommandRegistry, type CommandRegistry } from './commandRegistry'
import type { Theme } from '@components/ThemeProvider.tsx'
import type { AppRoute } from '@/app/routes.ts'

type TerminalControllerOptions = {
  pages: Pick<AppRoute, 'label' | 'path'>[]
  addLine: (line: string) => void
  clearHistory: () => void
  navigate: (path: string) => void
  openExternal: (url: string) => void
  requestExit: () => void
  theme: Theme
  setTheme: (theme: Theme) => void
}

type TerminalController = {
  registry: CommandRegistry
  input: string
  suggestions: string[]
  highlightedIndex: number
  handleInputChange: (value: string) => void
  handleSubmit: () => void
  runCommand: (command: string) => void
  highlightNext: () => void
  highlightPrevious: () => void
  acceptHighlighted: () => string | undefined
  resetInput: () => void
}

export function useTerminalController(options: TerminalControllerOptions): TerminalController {
  const {
    pages,
    addLine,
    clearHistory,
    navigate,
    openExternal,
    requestExit,
    theme,
    setTheme,
  } = options

  const registry = useMemo(
    () =>
      createCommandRegistry({
        pages,
        addLine,
        clearHistory,
        navigate,
        theme,
        setTheme,
        openExternal,
        requestExit,
      }),
    [
      pages,
      addLine,
      clearHistory,
      navigate,
      theme,
      setTheme,
      openExternal,
      requestExit,
    ],
  )

  const [input, setInput] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const suggestions = useMemo(() => {
    if (!input.trim()) return []
    const lower = input.toLowerCase()
    return registry
      .list()
      .filter((name) => name.toLowerCase().includes(lower))
  }, [input, registry])

  const handleInputChange = useCallback((value: string) => {
    setInput(value)
    setHighlightedIndex(-1)
  }, [])

  const resetInput = useCallback(() => {
    setInput('')
    setHighlightedIndex(-1)
  }, [])

  const runCommand = useCallback(
    (command: string) => {
      if (!command.trim()) return
      addLine(`> ${command}`)
      registry.execute(command)
    },
    [addLine, registry],
  )

  const handleSubmit = useCallback(() => {
    if (!input.trim()) return
    runCommand(input)
    resetInput()
  }, [input, resetInput, runCommand])

  const highlightNext = useCallback(() => {
    if (suggestions.length === 0) return
    setHighlightedIndex((current) => (current + 1) % suggestions.length)
  }, [suggestions])

  const highlightPrevious = useCallback(() => {
    if (suggestions.length === 0) return
    setHighlightedIndex((current) => {
      if (current <= 0) return suggestions.length - 1
      return current - 1
    })
  }, [suggestions])

  const acceptHighlighted = useCallback(() => {
    if (highlightedIndex < 0) return undefined
    return suggestions[highlightedIndex]
  }, [highlightedIndex, suggestions])

  return {
    registry,
    input,
    suggestions,
    highlightedIndex,
    handleInputChange,
    handleSubmit,
    runCommand,
    highlightNext,
    highlightPrevious,
    acceptHighlighted,
    resetInput,
  }
}
