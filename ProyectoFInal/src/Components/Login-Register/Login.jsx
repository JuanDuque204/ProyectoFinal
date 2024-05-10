import React, { useState } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { ValidarUsers, usuarios } from './Listas';

const Login = () => {
  const [data, setData] = useState({user:"", password:""})

  const cambioDatos = (event) =>{
    const { name, value } = event.target;
    setData({ ...data, [name]: value});
  };

  const cambioBoton = (event) => {
    event.preventDefault();
    console.log(usuarios);

    const userNew = {
      user: data.user,
      password: data.password
    }
    ValidarUsers(userNew)
    console.log("Usuario:", data.user);
    console.log("Contraseña:", data.password);
    setData({user: data.user, password:""})
  }


  return (
    <div className='wrapperL'>
      <form action="" id="formLogin" onSubmit={cambioBoton}>
        <h1>Login</h1>
        <div className="input-boxL">
          <input type="email" placeholder='Usuario' id="inputUser" name='user' value={data.user} onChange={cambioDatos} autoFocus required  />
          <FaUser className='iconL' />
        </div>
        <div className="input-boxL">
          <input type="password" placeholder='Contraseña' id="inputPassword" name='password' value={data.password} onChange={cambioDatos} required />
          <FaLock className='iconL'/>
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="link-registroL">
          <p>¿No tienes una cuenta? <a href="/register">Registrarse</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login