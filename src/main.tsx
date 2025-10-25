import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@/index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {ThemeProvider} from "@components/ThemeProvider.tsx";
import {appRoutes} from "@/app/routes.ts";

const router = createBrowserRouter(
    appRoutes.map(({path, Component}) => ({path, Component}))
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <App router={router} routes={appRoutes}>
                <RouterProvider router={router}/>
            </App>
        </ThemeProvider>
    </StrictMode>,
)
