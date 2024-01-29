import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './theme/theme.ts'
import NormalizeStyles from './theme/baseStyles.ts'
;('use client')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NormalizeStyles />
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

