import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './dashboard/Dashboard.tsx'
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Dashboard />
  }]
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
