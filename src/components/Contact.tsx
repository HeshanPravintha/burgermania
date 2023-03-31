import React from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import Navbar from './Navbar';

const Contact: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  }
  return (
    <div>
      <h1>Contact Us</h1>
      <h1>Contact Us on Facebook</h1>
      <h1>Contact Us on Instagram</h1>
      <h1>Contact Us on LinkedIn</h1>
      <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Menu</a>
        <a href="">Contact Us</a>
        <a href="">Map</a>
        <a href=""></a>
        <a href="">About Us</a>
        <a href="">Menu</a>
        <a href="">Contact Us</a>
        <a href="">Map</a>
    </div>
  );
}

export default Contact;