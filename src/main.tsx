import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import EducationPage from './pages/EducationPage.tsx'
import ModuloUnoPage from './pages/ModuloUnoPage.tsx'
import AeropressPage from './pages/AeropressPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/educacion" element={<EducationPage />} />
        <Route path="/modulo-1" element={<ModuloUnoPage />} />
        <Route path="/aeropress" element={<AeropressPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
