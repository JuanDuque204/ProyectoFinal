// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';

import './Inventario.css'

const obtenerProductosDesdeBD = async (setProductos) => {
  try {
    const response = await fetch('http://localhost:3004/products');
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const data = await response.json();
    setProductos(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

const InventariO = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    id_producto: '',
    descripcion: '',
    nombre: '',
    precio: '',
    cantidad_existente: '',
  });

  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    obtenerProductosDesdeBD(setProductos);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const handleSubmit = async (e) => {
  // e.preventDefault(); // evita que la página se recargue

    const newProduct = {
      id_producto: nuevoProducto.id_producto,
      nombre: nuevoProducto.nombre,
      descripcion: nuevoProducto.descripcion,
      precio: nuevoProducto.precio,
      cantidad_existente: nuevoProducto.cantidad_existente,
    };

    try {
      let response;
      if (modoEdicion) {
        response = await fetch(`http://localhost:3004/products/${productoEditado.id_producto}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
          
        });
      } else {
        response = await fetch('http://localhost:3004/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct),
          
          
        });
      }

      if (response.ok) {
        const updatedProduct = await response.json();
        if (modoEdicion) {
          setProductos(productos.map(producto => (producto.id_producto === productoEditado.id_producto ? updatedProduct : producto)));
          setModoEdicion(false);
          setProductoEditado(null);
        } else {
          setProductos([...productos, updatedProduct]);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto guardado exitosamente",
          showConfirmButton: false,
          timer: 5000,
          
        });
      } else if (response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El producto ya existe",
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fallo la conexión al servidor",
      });
    }

    setNuevoProducto({ id_producto: '', descripcion: '', nombre: '', precio: '', cantidad_existente: '' });
  };

  const handleEdit = (producto) => {
    setModoEdicion(true);
    setProductoEditado(producto);
    setNuevoProducto(producto);
  };

  const handleDelete = async (id_producto) => {
    try {
      const response = await fetch(`http://localhost:3004/products/${id_producto}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProductos(productos.filter(producto => producto.id_producto !== id_producto));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto eliminado exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error('Error al eliminar el producto');
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
    <div className="container mt-5">
      <h2 className="mt-5">{modoEdicion ? 'Editar Producto' : 'Registrar Productos'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Código</label>
          <input type="text" className="form-control" required name="id_producto" value={nuevoProducto.id_producto} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Producto</label>
          <input type="text" className="form-control" required name="nombre" value={nuevoProducto.nombre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <input type="text" className="form-control" required name="descripcion" value={nuevoProducto.descripcion} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Precio</label>
          <input type="number" className="form-control" required name="precio" value={nuevoProducto.precio} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Existencias</label>
          <input type="number" className="form-control" required name="cantidad_existente" value={nuevoProducto.cantidad_existente} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary mt-3">{modoEdicion ? 'Actualizar' : 'Guardar'}</button>
      </form>
      <h2 className="mt-5">Lista de Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Existencias</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad_existente}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(producto)}><FaRegEdit /></button>
                <button className="btn btn-danger" onClick={() => handleDelete(producto.id_producto)}><RiDeleteBin6Line /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventariO;
