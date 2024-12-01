import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material'
import { theme } from './components/Theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
