import React, { useContext } from 'react'
import { UsuarioContext } from '../context/usuario'
import { NavAdmin } from '../components/NavAdmin'
export const Home = () => {
  return (
    <section>
      <h1>Home</h1>
      <p>Publico</p>
    </section>
  )
}
export const Login = () => {
  const { usuario, login, logout } = useContext(UsuarioContext) // se trae el usuario del context usuario y el login y logout

  return (
    <>
      <h1>Login</h1>
      <p>Publico</p>
      {usuario
        ? <button onClick={logout}>Logout</button> // si el usuario esta logueado entonces se muestra el boton de logout
        : <button onClick={login}>Login</button>} {/** si el usuario no esta logueado entonces se muestra el boton de login */}
    </>
  )
}
export const Admin = () => {
  return (
    <>
      <NavAdmin />
      <section>
        <h1>Admin</h1>
        <p>Privado</p>
      </section>
    </>

  )
}
export const AgregarHabitaciones = () => {
  return (
    <section>
      <h1>Admin</h1>
      <p>Privado</p>
      <p>Agregar Habitaciones</p>
    </section>
  )
}
export const Recepcionista = () => {
  return (
    <>
      <NavAdmin />
      <section>
        <h1>Recepcionista</h1>
        <strong>Permisos</strong>
        <ul>
          <li>Editar</li>
          <li>Agregar</li>
          <li>eliminar</li>
        </ul>
        <p>Privado</p>

      </section>
    </>
  )
}
