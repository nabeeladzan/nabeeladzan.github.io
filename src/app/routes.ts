import About from '@pages/About.tsx'
import Home from '@pages/Home.tsx'
import Projects from '@pages/Projects.tsx'
import Socials from '@pages/Socials.tsx'

export type AppRoute = {
  path: string
  label: string
  Component: () => JSX.Element
}

export const appRoutes: AppRoute[] = [
  { path: '/', label: 'home', Component: Home },
  { path: '/about', label: 'about', Component: About },
  { path: '/projects', label: 'projects', Component: Projects },
  { path: '/socials', label: 'socials', Component: Socials },
]
