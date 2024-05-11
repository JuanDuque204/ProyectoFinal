import React from 'react';
import './Cart.css';

const Cart = () => {
  const products = [
    { id: 1, name: 'Camiseta', price: 25 },
    { id: 2, name: 'Pantalón', price: 40 },
    { id: 3, name: 'Zapatos', price: 55 }
  ];

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
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
        {products.map(product => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
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
