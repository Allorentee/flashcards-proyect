import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Approutes } from './components/routes/app.routes.tsx'
import { Layout } from './components/layout/Layout.tsx'
import GlobalsCSS from './theme/base.ts'
import './index.css'
;('use strict')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalsCSS />
    <BrowserRouter>
      <Layout>
        <Approutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)

