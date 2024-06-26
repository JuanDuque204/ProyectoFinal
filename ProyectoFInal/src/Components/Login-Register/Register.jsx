// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { InsertDB } from './api.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({ nombre: "", apellido: "", user: "", password: "" });
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  
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
        email: data.user,
        contrase: data.password
      };
      InsertDB(userNew, "http://localhost:3004/users")
        .then(response => {
          if (response.status === 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario registrado exitosamente",
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              navigate('/login'); // Redirigir al componente de login
            });
          } else if (response.status === 409) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "El usuario ya existe",
            });
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fallo la conexión al servidor",
          });
        });
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
          <input type="email" placeholder='Email' name='user' value={data.user} onChange={cambioDatos} required />
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
