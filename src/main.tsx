import { createRoot } from 'react-dom/client'
import { Router } from './Router/Router.tsx'
import "./globals.css"  
createRoot(document.getElementById('root')!).render(
  <Router />
)
