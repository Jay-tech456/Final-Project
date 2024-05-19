import React, { useEffect, useState } from 'react';
import './Logo.css';

const Logo = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className = "logoDiv">
    <img
      src= "https://th.bing.com/th/id/OIP.R3zQaPyReWLK2BqpjNqZ8gHaDc?rs=1&pid=ImgDetMain"
      className={`logo ${fadeIn ? 'fade-in' : ''}`}
      alt="Logo"
    />

    <h1
    className={`logo ${fadeIn ? 'fade-in' : ''}`}
    >The eBay of Local Businesses </h1>

    </div>
  );
};

export default Logo;
