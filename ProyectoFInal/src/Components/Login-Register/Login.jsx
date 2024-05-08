import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='wrapperL'>
      <form action="">
        <h1>Login</h1>
        <div className="input-boxL">
          <input type="email" placeholder='Usuario' required />
          <FaUser className='iconL'/>
        </div>
        <div className="input-boxL">
          <input type="password" placeholder='Contraseña' required />
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

