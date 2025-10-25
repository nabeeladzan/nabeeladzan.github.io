import type { ReactNode } from 'react'
import type { AppRoute } from '@/app/routes.ts'
import { TerminalLayout } from '@/features/terminal/TerminalLayout.tsx'

export type AppProps = {
  router: { navigate: (path: string) => void }
  routes: AppRoute[]
  children?: ReactNode
}

export default function App({ router, routes, children }: AppProps) {
  return (
    <TerminalLayout
      routes={routes.map(({ label, path }) => ({ label, path }))}
      navigate={router.navigate}
    >
      {children}
    </TerminalLayout>
  )
}
