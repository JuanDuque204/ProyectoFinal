import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="email" placeholder='Usuario' required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Contraseña' required />
          <FaLock className='icon'/>
        </div>
        <button type="submit">Iniciar sesión</button>
        <div className="link-registro">
          <p>¿No tienes una cuenta? <a href="#">Registrar</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login

