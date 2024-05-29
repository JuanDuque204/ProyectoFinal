// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Cart.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';

const ProductosId = JSON.parse(localStorage.getItem('ProductosId')) || [];

// Función para obtener productos por ID desde una API
const getProductsById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3004/products/${id}`);
    if (!response.ok) {
      throw new Error('Error al consultar el producto');
    }
    const data = await response.json();
    return data[0];
  } catch (err) {
    return { error: err.message };
  }
};

// Función para agregar un producto al carrito
export const agregarProducto = async (id) => {
  const productoExistente = ProductosId.find(producto => producto === id);

  if (productoExistente) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Producto ya añadido al carrito",
      showConfirmButton: true,
    });
    return;
  } else {
    ProductosId.push(id);
    localStorage.setItem('ProductosId', JSON.stringify(ProductosId));

    const productDetails = await getProductsById(id);

    if (!productDetails.error) {
      Swal.fire({
        icon: 'success',
        title: 'Añadido al carrito',
        text: 'Se ha añadido al carrito con éxito',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: productDetails.error,
      });
    }
  }
};

// Componente Cart
const Cart = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const initializeProductos = async () => {
      const productPromises = ProductosId.map(id => getProductsById(id));
      const productList = await Promise.all(productPromises);
      setProductos(productList.filter(product => !product.error));
    };

    initializeProductos();
  }, []);

  const calculateTotal = () => {
    return productos.reduce((total, product) => total + parseFloat(product.precio), 0);
  };

  const Pagar = () => {
    Swal.fire({
      icon: 'success',
      title: 'Pago realizado con éxito',
      text: 'Gracias por su compra!',
    });
    localStorage.removeItem('ProductosId');
    setProductos([]);
  };

  const Cancelar = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Compra cancelada',
      text: 'Su compra ha sido cancelada.',
    });
    localStorage.removeItem('ProductosId');
    setProductos([]);
  };

  const EliminarProduct = (id) => {
    const nuevosProductos = productos.filter(product => product.id_producto !== id);
    setProductos(nuevosProductos);
  
    const nuevosProductosId = ProductosId.filter(productId => productId !== id);
    localStorage.setItem('ProductosId', JSON.stringify(nuevosProductosId));
  
    Swal.fire({
      icon: 'info',
      title: 'Producto eliminado',
      text: 'El producto ha sido eliminado del carrito.',
    });
  };
  

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="product-list">
        {productos.map(product => (
          <li key={product.id_producto} className="product-item">
            <span className="product-name">{product.nombre}</span>
            <span className="product-price">${product.precio}</span>
            <span className="product-description">{product.descripcion}</span>
            <span className="product-quantity"><input type="number" placeholder='#' className='product-quantity' /></span>
            <button className='button-delete' onClick={() => EliminarProduct(product.id_producto)}>
              <RiDeleteBin6Line />
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${calculateTotal()}</p>
      <div className="button-container">
        <button className="pay-button" onClick={Pagar}>Pagar</button>
        <button className="cancel-button" onClick={Cancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default Cart;
