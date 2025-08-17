/**
 * @description Main
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from './component/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
