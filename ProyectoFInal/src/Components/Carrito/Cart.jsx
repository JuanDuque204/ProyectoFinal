// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';
const productos = [];
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
  // Verifica si el producto ya existe en el carrito
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
    // Agrega el ID del producto al array ProductosId
    ProductosId.push(id);
    // Guarda el array actualizado en el localStorage
    localStorage.setItem('ProductosId', JSON.stringify(ProductosId));

    // Obtiene los detalles del producto y lo agrega a la lista productos
    
    const productDetails=await getProductsById(id);

    if (!productDetails.error) {
      productos.push(productDetails);
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

// Función para inicializar la lista de productos al cargar la página
const initializeProductos = async () => {
  for (const id of ProductosId) {
    const productDetails = await getProductsById(id);
    if (!productDetails.error) {
      productos.push(productDetails);
    }
  }
};

// Llama a la función de inicialización cuando se carga la página
initializeProductos();

const Cart = () => {
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

  };

  const Cancelar = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Compra cancelada',
      text: 'Su compra ha sido cancelada.',
    });
    localStorage.removeItem('ProductosId');
 
  };

  const EliminarProduct = (id) => {
    const nuevosProductosId = ProductosId.filter(productId => id !== productId);
    localStorage.setItem('ProductosId', JSON.stringify(nuevosProductosId));
  }
  

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="product-list">
        {productos.map(product => (
          <li key={product.id_producto} className="product-item">
            <span className="product-name">{product.nombre}</span>
            <span className="product-price">${product.precio}</span>
            <span className='product-name'>{product.descripcion}</span>
            <span className='product-price'><input type="number" name="" id="" placeholder='#' className='product-quantity' /></span>
            <span className='product-price'><button className='button-delete' onClick={() => EliminarProduct(product.id_producto)}><RiDeleteBin6Line /></button></span>
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

