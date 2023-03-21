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
    </div>
  );
}

export default Contact;