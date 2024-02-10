// HeroSection.js

import React from 'react';
import './style.css';

const HeroSection = () => {
  return (
    <section className="section hero" style={{backgroundImage: `url('./assets/images/hero-banner.png')`}}>
      <div className="container">
        <h2 className="h1 hero-title">
          New Summer <strong>Shoes Collection</strong>
        </h2>

        <p className="hero-text">
          Competently expedite alternative benefits whereas leading-edge catalysts for change. Globally leverage an expanded array of leadership.
        </p>

        <button className="btn btn-primary">
          <span>Shop Now</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
