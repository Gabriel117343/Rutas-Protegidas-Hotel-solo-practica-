import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { UsuarioContext } from './context/usuario'
import './App.css'
import { Login, Home, Admin, Recepcionista } from './pages/Paginas'
import { RutasProtegidas } from './components/RutasProtegidas'
function App () {
  const { usuario } = useContext(UsuarioContext)
  console.log(usuario)
  // IMPORTANTE: cambiar el rol del usuario en el context usuario para ver como se comporta la app

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} /> {/** si el usuario no esta logueado entonces se muestra la pagina de login */}
          <Route element={<RutasProtegidas isAllowed={!!usuario?.rol.includes('admin')} rutaRedireccion='/login' />}> {/** !! es lo contrario de usuario y ? valida si el usuario es null o no, si el rol del usuario incluye .., aqui se quiere proteger Multiples rutas por lo que se Utiliza Outline */}
            <Route path='/admin' element={<Admin />} /> {/** si el usuario tiene el rol de admin entonces se muestra la pagina de admin, admin es el children */}
            <Route path='/admin/agregar-habitaciones' element={<Admin />} /> {}
          </Route>
          <Route path='/admin/agregar-habitaciones' element={<Admin />} />
          <Route
            path='/recepcionista' element={
              <RutasProtegidas isAllowed={!!usuario?.rol.includes('recepcionista')} rutaRedireccion='/login'> {/** !! es lo contrario de usuario y ? valida si el usuario es null o no, si el rol del usuario incluye .. */}
                <Recepcionista /> {/** si el usuario tiene el rol de recepcionista entonces se muestra la pagina de recepcionista, recepcionista es el children */}
              </RutasProtegidas>
            }
          />
          {/** Y se podria continuar con mas rutas... */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/admin/agregar-habitaciones'>Agregar Habitaciones</Link>
      <Link to='/recepcionista'>Recepcionista</Link>
    </nav>
  )
}
export const Footer = () => {
  const { usuario } = useContext(UsuarioContext)
  return (
    <footer>
      <p>Footer</p>
      {usuario ? <p>Usuario: {usuario.username} Permiso: {usuario.permissions} rol: {usuario.rol}</p> : null}
    </footer>
  )
}
