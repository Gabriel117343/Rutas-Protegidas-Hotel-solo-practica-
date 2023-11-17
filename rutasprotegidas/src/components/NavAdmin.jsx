import React, { useContext } from 'react'
import { UsuarioContext } from '../context/usuario'
export const NavAdmin = () => {
  const { logout } = useContext(UsuarioContext)
  return (
    <nav>
      <button onClick={logout}>Salir</button> {/** se llama a la funcion logout del context usuario */}
    </nav>
  )
}
