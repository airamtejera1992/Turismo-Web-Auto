import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Auth from './pages/Auth.tsx'
import Pricing from './pages/Pricing.tsx'
import Dashboard from './pages/Dashboard.tsx'
import AdminPanel from './pages/AdminPanel.tsx'
import Legal from './pages/Legal.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/planes" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/privacidad" element={<Legal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
