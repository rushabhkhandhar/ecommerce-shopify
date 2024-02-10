import React from 'react';
import './style.css'

const YourComponent = () => {
  return (
    <section className="section special">
      <div className="container">
        <div className="special-banner" style={{backgroundImage: "url('./assets/images/special-banner.jpg')"}}>
          <h2 className="h3 banner-title">New Trend Edition</h2>
          <a href="#" className="btn btn-link">
            <span>Explore All</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>

        <div className="special-product">
          <h2 className="h2 section-title">
            <span className="text">Nike Special</span>
            <span className="line"></span>
          </h2>

          <ul className="has-scrollbar">
            {/* Add other product items */}
            <li className="product-item">
              <div className="product-card" tabIndex="0">
                <figure className="card-banner">
                  <img src="./assets/images/product-2.jpg" width="312" height="350" loading="lazy" alt="Leather Mens Slipper" className="image-contain" />
                  <ul className="card-action-list">
                    <li className="card-action-item">
                      <button className="card-action-btn" aria-labelledby="card-label-1">
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>
                      <div className="card-action-tooltip" id="card-label-1">Add to Cart</div>
                    </li>
                    {/* Add other card action items */}
                  </ul>
                </figure>
                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Men</a> /
                    <a href="#" className="card-cat-link">Sports</a>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">Leather Mens Slipper</a>
                  </h3>
                  <data className="card-price" value="190.85">$190.85</data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabIndex="0">
                <figure className="card-banner">
                  <img src="./assets/images/product-3.jpg" width="312" height="350" loading="lazy" alt="Simple Fabric Shoe" className="image-contain" />
                  <div className="card-badge">New</div>
                  <ul className="card-action-list">
                    {/* Add card action items */}
                  </ul>
                </figure>
                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Men</a> /
                    <a href="#" className="card-cat-link">Women</a>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">Simple Fabric Shoe</a>
                  </h3>
                  <data className="card-price" value="160.85">$160.85</data>
                </div>
              </div>
            </li>

            <li className="product-item">
              <div className="product-card" tabIndex="0">
                <figure className="card-banner">
                  <img src="./assets/images/product-4.jpg" width="312" height="350" loading="lazy" alt="Air Jordan 7 Retro " className="image-contain" />
                  <div className="card-badge"> -25%</div>
                  <ul className="card-action-list">
                    {/* Add card action items */}
                  </ul>
                </figure>
                <div className="card-content">
                  <div className="card-cat">
                    <a href="#" className="card-cat-link">Men</a> /
                    <a href="#" className="card-cat-link">Sports</a>
                  </div>
                  <h3 className="h3 card-title">
                    <a href="#">Air Jordan 7 Retro </a>
                  </h3>
                  <data className="card-price" value="170.85">$170.85 <del>$200.21</del></data>
                </div>
              </div>
            </li>
            {/* Add other product items */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
