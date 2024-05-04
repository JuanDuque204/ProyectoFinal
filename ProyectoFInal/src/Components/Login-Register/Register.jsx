import React from 'react';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Register = () => {
  return (
      <div className='wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder='Nombres' required />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Apellidos' required />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Usuario' required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Contraseña' required />
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder=' Confirmar contraseña' required />
          <FaLock className='icon'/>
        </div>
        <button type="submit">Registrarse</button>
        <div className="link-login">
          <p>¿Ya tienes una cuenta? <a href='/login'>Inicia Sesión</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register
