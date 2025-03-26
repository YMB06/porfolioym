import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*el comp BR en vuelve al comp App(mi aplicacion) lo que permite que toda mi App(subcomponente)
    tienen acceso a las funciones del router*/}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
