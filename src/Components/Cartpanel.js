import React from 'react';
import './style.css'; // Import your cart panel stylesheet

const CartPanel = ({ cartItems, closePanel }) => {
  // Error handling, quantity management, and checkout functionality can be added here as needed

  return (
    <div className="cart-panel">
      <button className="close-btn" onClick={closePanel}>&times;</button>
      <h3 className="cart-title">Your Shopping Cart</h3>
      {cartItems.length > 0 ? (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-price">${item.price}</p>
                {/* Quantity controls can be added here */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
      <div className="cart-summary">
        <p className="cart-total">Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPanel;
