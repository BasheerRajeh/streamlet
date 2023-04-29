import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import ThemeProvider from './theme/index.tsx'
import { ThemeProvider as ThemeColorMode } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeColorMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ThemeColorMode>
    </HelmetProvider>
  </React.StrictMode>,
)
