import React from 'react';
import './Cart.css';

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
  

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>
      <ul className="product-list">
        {productos.map(product => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.names}</span>
            <span className="product-price">${product.price}</span>
           
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${calculateTotal()}</p>
      <div className="button-container">
      <button className="pay-button" onClick={() => alert('Implementa lógica de pago')}>Pagar</button>
        <button className="cancel-button" onClick={() => setCartItems([])}>Cancelar</button>
      </div>
    </div>
  );
};

export default Cart;
