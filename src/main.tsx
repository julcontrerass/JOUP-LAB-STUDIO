import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './shared/styles/global/index.css'
import './shared/i18n/config'
import { ThemeProvider } from '@/shared/contexts'
import { HomePage } from '@/features/brand'
import { CourseCatalogPage, LabPage, FreeResourcesPage, ModuleOnePage, AeropressModulePage } from '@/features/coffee-education'
import { ConsultingPage } from '@/features/consulting-services'
import { BlogPage, BlogPostPage } from '@/features/blog'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<CourseCatalogPage />} />
          <Route path="/service" element={<ConsultingPage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/educacion" element={<FreeResourcesPage />} />
          <Route path="/modulo-1" element={<ModuleOnePage />} />
          <Route path="/aeropress" element={<AeropressModulePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>,
)
