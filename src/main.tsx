import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import {createBrowserRouter, RouterProvider} from "react-router";

// No need to import pages, they are automatically imported from the pages directory
const router = createBrowserRouter([
    {path: "/", Component: Home},
    {path: "/about", Component: About},
    {path: "/projects", Component: Projects},
    {path: "/socials", Component: Socials},
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App router={router}>
            <RouterProvider router={router}/>
        </App>
    </StrictMode>,
)
