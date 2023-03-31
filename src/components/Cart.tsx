import React from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import Navbar from './Navbar';

const Cart: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  }
  return (
    <div>
      <h1>Cart Page</h1>
      <h1>Details</h1>
      <a href="">About Us</a>
        <a href="">Menu</a>
        <a href="">Contact Us</a>
        <a href="">Map</a>
        <a href=""></a>

    </div>
  );
}

export default Cart;