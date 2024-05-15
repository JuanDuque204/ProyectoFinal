import React, { useState } from 'react';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { agregarUsers } from './Listas';


const Register = () => {
  const [data, setData] = useState({ nombre: "", apellido: "", user: "", password: "" })
  const [mensaje, setMensaje] = useState("");

  const cambioDatos = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const cambioBoton = (event) => {
    event.preventDefault();

    if (data.password !== data.passwordConfirm) {
      setMensaje("Las contraseñas no coinciden");
      setData({ ...data, password: "", passwordConfirm: "" })
    } else {
      setMensaje("");
      const userNew = {
        nombre: data.nombre,
        apellido: data.apellido,
        user: data.user,
        password: data.password
      }
      agregarUsers(userNew)
      const data1 = {
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.user,
        contrase: data.password
      };

      fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data1)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Ocurrió un error al hacer la solicitud.');
          }
          return response.json();
        })
        .then(responseData => {
          console.log(responseData);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      console.log("Usuario:", data.user);
      console.log("Nombre:", data.nombre);
      console.log("Apellido:", data.apellido);
      console.log("Contraseña:", data.password);
      console.log("Contraseña confirm:", data.passwordConfirm);
    }
  }
  return (
    <div className='wrapper'>
      <form action="" onSubmit={cambioBoton}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" placeholder='Nombres' name='nombre' value={data.nombre} onChange={cambioDatos} required />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Apellidos' name='apellido' value={data.apellido} onChange={cambioDatos} required />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Usuario' name='user' value={data.user} onChange={cambioDatos} required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Contraseña' name='password' value={data.password} onChange={cambioDatos} required />
          <FaLock className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Confirmar contraseña' name='passwordConfirm' value={data.passwordConfirm} onChange={cambioDatos} required />
          <FaLock className='icon' />
          {mensaje && <label>{mensaje}</label>}
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
