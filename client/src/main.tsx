import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Approutes } from './components/routes/app.routes.tsx'
import { Layout } from './components/layout/Layout.tsx'
import './index.css'
;('use client')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Approutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)

