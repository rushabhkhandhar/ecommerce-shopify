// ProductSection.js

import React from 'react';
import './style.css';

// ProductSection component
const ProductSection = ({ handleAddToCart }) => {
  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">Bestsellers Products</h2>
        <ul className="filter-list">
          <li><button className="filter-btn  active">All</button></li>
          <li><button className="filter-btn">Nike</button></li>
          <li><button className="filter-btn">Adidas</button></li>
          <li><button className="filter-btn">Puma</button></li>
          <li><button className="filter-btn">Bata</button></li>
          <li><button className="filter-btn">Apex</button></li>
        </ul>
        <ul className="product-list">
          {[...Array(8)].map((_, index) => (
            <li key={index} className="product-item">
              <div className="product-card" tabIndex="0">
                <figure className="card-banner">
                  <img src={`./assets/images/product-${index + 1}.jpg`} width="312" height="350" loading="lazy" alt={`Product ${index + 1}`} className="image-contain" />
                  {(index === 0 || index === 2 || index === 4 || index === 6) && <div className="card-badge">New</div>}
                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button className="card-action-btn" onClick={() => handleAddToCart(`Product ${index + 1}`, (100 + index).toFixed(2))} aria-labelledby={`card-label-${index + 1}-1`}>
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>
                      <div className="card-action-tooltip" id={`card-label-${index + 1}-1`}>Add to Cart</div>
                    </li>
                  </ul>
                </figure>
                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Men</a> /
                    <a href="#" className="card-cat-link">Women</a>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">Product {index + 1}</a>
                  </h3>
                  <data className="card-price" value={(100 + index).toFixed(2)}>${(100 + index).toFixed(2)}</data>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductSection;
