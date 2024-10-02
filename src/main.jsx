import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //Strict mode is a wrapper component which used to check for errors.
  <StrictMode>
    <App />
  </StrictMode>,
)
