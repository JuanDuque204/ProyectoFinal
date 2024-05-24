// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import './Inventario.css'

const InventariO = () => {
    const [productos, setProductos] = useState([
      { codigo: 2123, producto: 'JEAN', descripcion: 'Baggy low jeans', precio: 120000, existencias: 1188 },
      { codigo: 1122, producto: 'HODDIE', descripcion: 'Oversize', precio: 90000, existencias: 4996 },
      { codigo: 2987, producto: 'FALDA', descripcion: 'Mini falda con fruncidos', precio: 85000, existencias: 228 },
      { codigo: 2431, producto: 'JEAN', descripcion: 'Flared High Jeans', precio: 130000, existencias: 198 },
      { codigo: 1210, producto: 'VESTIDO', descripcion: 'Vestido ajustado acanalado', precio: 115000, existencias: 199 },
      { codigo: 1210, producto: 'CAMISETA', descripcion: 'Camiseta con estilo estampado', precio: 50000, existencias: 199 },
    ]);
  
    const [nuevoProducto, setNuevoProducto] = useState({
      codigo: '',
      descripcion: '',
      producto: '',
      precio: '',
      existencias: '',
    });
  
    const [modoEdicion, setModoEdicion] = useState(false);
    const [productoEditado, setProductoEditado] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNuevoProducto({ ...nuevoProducto, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault(); //evita que la pagina se recargue
      if (modoEdicion) {
        setProductos(productos.map(producto => (producto.codigo === productoEditado.codigo ? nuevoProducto : producto)));
        setModoEdicion(false);
        setProductoEditado(null);
      } else {
        setProductos([...productos, nuevoProducto]);
      }
      setNuevoProducto({ codigo: '', descripcion: '', producto: '', precio: '', existencias: '' });
    };
  
    const handleEdit = (producto) => {
      setModoEdicion(true);
      setProductoEditado(producto);
      setNuevoProducto(producto);
    };
  
    const handleDelete = (codigo) => {
      setProductos(productos.filter(producto => producto.codigo !== codigo));
    };
  
    return (
      
      <div className="container mt-5">
        <h2 className="mt-5">{modoEdicion ? 'Editar Producto' : 'Registrar Productos'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Código</label>
            <input type="text" className="form-control" name="codigo" value={nuevoProducto.codigo} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Producto</label>
            <input type="text" className="form-control" name="producto" value={nuevoProducto.producto} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input type="text" className="form-control" name="descripcion" value={nuevoProducto.descripcion} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input type="number" className="form-control" name="precio" value={nuevoProducto.precio} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Existencias</label>
            <input type="number" className="form-control" name="existencias" value={nuevoProducto.existencias} onChange={handleChange} />
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
              <tr key={producto.codigo}>
                <td>{producto.codigo}</td>
                <td>{producto.producto}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.existencias}</td>
                <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(producto)}><FaRegEdit /></button>
                  
                  <button className="btn btn-danger bi bi-trash3-fill" onClick={() => handleDelete(producto.codigo)}><RiDeleteBin6Line /></button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    );
  };
  
  export default InventariO;