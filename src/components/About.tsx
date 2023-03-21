import React from 'react';
import NavBarButton from './NavBarButton/NavBarButton';
import Navbar from './Navbar';

const About: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  }
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export default About;