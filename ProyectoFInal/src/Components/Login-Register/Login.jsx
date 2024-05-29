// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { ValidarUser } from './api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexto';

const Login = () => {

  const [data, setData] = useState({ user: "", password: "" })
  const navigate = useNavigate();
  const {login} = useContext(UserContext);
  
  const cambioDatos = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const cambioBoton = async (event) => {
    event.preventDefault();
    const user = data.user;
    const password = data.password;

    try {
      const response = await ValidarUser(user, password);
      if (response.error) {
        console.error(response.error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al validar el usuario",
        });
      } else {
        if (response.length > 0) {
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bienvenido",
            showConfirmButton: true,
          }).then(() => {
            login(response[0]);
            navigate('/');
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario no existe o la contraseña es incorrecta",
          });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fallo la conexión al servidor",
      });
    }
  };



  return (
    <div className='wrapperL'>
      <form action="" id="formLogin" onSubmit={cambioBoton}>
        <h1>Login</h1>
        <div className="input-boxL">
          <input type="email" placeholder='Usuario' id="inputUser" name='user' value={data.user} onChange={cambioDatos} autoFocus required />
          <FaUser className='iconL' />
        </div>
        <div className="input-boxL">
          <input type="password" placeholder='Contraseña' id="inputPassword" name='password' value={data.password} onChange={cambioDatos} required />
          <FaLock className='iconL' />
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