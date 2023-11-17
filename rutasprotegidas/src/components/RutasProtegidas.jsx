import React from 'react'
import { Navigate, Outlet } from 'react-router-dom' // Outlet es para rutas hijas anidadas en rutas padre (ver App.jsx linea 18)
export const RutasProtegidas = ({ children, isAllowed, rutaRedireccion }) => {
  console.log(isAllowed)
  if (!isAllowed) {
    return <Navigate to={rutaRedireccion} />
  }
  // eslint-disable-next-line no-unneeded-ternary
  return children ? children : <Outlet /> // children es para una ruta hija anidada (ver App.jsx linea 24)
  // si no hay un children entonces quiere decir que hay multiples rutas hijas que estan anidadas en una ruta padre, por lo que se usa Outlet (ver App.jsx linea 18)
}
