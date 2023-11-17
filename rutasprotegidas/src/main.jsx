import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UsuarioProvider } from './context/usuario' // se importa el provider para poder usar el context usuario en toda la app
ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioProvider> {/** se envuelve toda la app en el provider para que todos los componentes tengan acceso al usuario context */}
    <App />
  </UsuarioProvider>
)
