import React from 'react';
import './Cart.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const productos=[];



export const AgregarCart=(id,names,price)=>{
  productos.push(
    {
      id:id,
      names:names,
      price:price
    }
)
}
export const agregarProducto = (id,names,price) => {

  const nuevoProducto={
    id:id,
    names:names,
    price:price
  }
  
  // Verifica si el producto ya existe en el carrito
  const productoExistente = productos.find(producto => producto.id === nuevoProducto.id);

  if (productoExistente) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Producto ya añadido al carrito",
      showConfirmButton: true,
    })
      
      navigate('/carrito');
  return;
    }
else{
  productos.push(nuevoProducto);
  Swal.fire({
    icon: 'success',
    title: 'Añadido al carrito',
    text: 'Se ha añadido al carrito con exito',
});
}}

const Cart = () => {
  const calculateTotal = () => {
    return productos.reduce((total, product) => total + product.price, 0);
  };

  const Pagar = () => {
    alert('Pago realizado con éxito'); 
  };

  const Cancelar = () => {
    alert('Compra cancelada'); 
  };
  const EliminarProduct = () =>{

  }
  

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="product-list">
        {productos.map(product => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.names}</span>
            <span className="product-price">${product.price}</span>
            <span className='product-price'><input type="number" name="" id="" placeholder='#' className='product-quantity' /></span>
            <span className='product-price'><button className='button-delete' onClick={EliminarProduct}><RiDeleteBin6Line /></button></span>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${calculateTotal()}</p>
      <div className="button-container">
      <button className="pay-button" onClick={() => alert('Pago')}>Pagar</button>
        <button className="cancel-button" onClick={() => setCartItems([])}>Cancelar</button>
      </div>
    </div>
  );  
};

export default Cart;
