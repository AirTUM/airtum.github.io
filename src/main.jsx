import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// GitHub Pages SPA redirect: restore path saved by 404.html
const redirect = sessionStorage.getItem('spa-redirect')
if (redirect && redirect !== '/') {
  sessionStorage.removeItem('spa-redirect')
  window.history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
