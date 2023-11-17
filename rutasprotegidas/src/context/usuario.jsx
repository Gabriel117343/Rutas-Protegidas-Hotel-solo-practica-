import React, { createContext, useState } from 'react'

export const UsuarioContext = createContext() // 1 se crea el context usuario para poder usarlo en toda la app y se exporta para poder usarlo en otros archivos como en App.jsx

export const UsuarioProvider = ({ children }) => { // 2 se crea el provider para poder usar el context usuario en toda la app y se exporta para poder usarlo en otros archivos como en main.jsx
  // Cabe resaltar que el usuario se puede traer de una base de datos o de un token, en este caso se va a probar con un usuario estatico, esto es solo una simulacion
  const [usuario, setUsuario] = useState(null) // esto es para probar el login y logout, comienzar por null porque no hay usuario logueado, luego se cambia por el usuario logueado
  const login = () => {
    setUsuario({ id: 1, username: 'jose', permissions: ['create'], rol: 'recepcionista' }) // roles a provar admin, recepcionista, permiso por ahora solo create
  }
  const logout = () => {
    setUsuario(null) // se cambia el usuario por null para que no haya usuario logueado
  }
  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, login, logout }}>{children}</UsuarioContext.Provider> // se pasa el usuario y el login y logout a los children
  )
}
