import React, { useState } from 'react';
import './style.css';
import CartPanel from './Cartpanel';

// Header component
const Header = ({ cart }) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const openPanel = () => {
    console.log('opening panel');
    setPanelOpen(true);
  };

  const closePanel = () => {
    console.log('closing panel');
    setPanelOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" width="160" height="50" alt="Footcap logo" />
        </a>

        <nav className="navbar">
          <ul className="navbar-list">
          <li class="navbar-item">
            <a className="navbar-link">Home</a>
          </li>
          <li class="navbar-item">
            <a className="navbar-link">
About</a>
          </li>
          <li class="navbar-item">
            <a className="navbar-link">Products</a>
          </li>
          <li class="navbar-item">
            <a className="navbar-link">
Shop</a>
          </li>
          <li class="navbar-item">
            <a className="navbar-link">Blog</a>
          </li>
          <li class="navbar-item">
            <a className="navbar-link">Contact</a>
          </li>
        
             </ul>
          <ul className="nav-action-list">
            <li>
              <button className="nav-action-btn">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                <span className="nav-action-text">Login / Register</span>
              </button>
            </li>
            <li>
              <button className="nav-action-btn">
                <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                <span className="nav-action-text">Wishlist</span>
                <data className="nav-action-badge" value="5" aria-hidden="true">5</data>
              </button>
            </li>
            <li>
              <button className="nav-action-btn" onClick={openPanel}>
                <ion-icon name="bag-outline" aria-hidden="true"></ion-icon>
                <data className="nav-action-text" value="318.00">Basket: <strong>${cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</strong></data>
                <data className="nav-action-badge" value={cart.length} aria-hidden="true">{cart.length}</data>
              </button>
              {panelOpen && <div className="overlay" onClick={closePanel}></div>}
              {panelOpen && (
                <CartPanel cartItems={cart} closePanel={closePanel} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;