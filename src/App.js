import React, { useState } from 'react';
import Header from '../src/Components/Header';
import HeroSection from './Components/Hero';
import CollectionSection from './Components/Collection';
import ProductSection from './Components/Product';
import CtaSection from './Components/Cta';
import SpecialSection from './Components/Special';
import Service from './Components/Service';
import SocialMedia from './Components/Social-Media';
import Footer from './Components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (productName, price) => {
    // Create a new item object
    const newItem = {
      name: productName,
      price: price
    };

    // Update the cart state with the new item
    setCart([...cart, newItem]);
  };
  return (
    <div className="App">
    <Header cart={cart}></Header>
    <HeroSection></HeroSection>
    <CollectionSection></CollectionSection>
    <ProductSection handleAddToCart={handleAddToCart} />

    <CtaSection></CtaSection>
    <SpecialSection></SpecialSection>
    <Service></Service>
    <SocialMedia></SocialMedia>
    <Footer></Footer>

    </div>
  );
}

export default App;