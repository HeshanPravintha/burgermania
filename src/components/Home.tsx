import React from 'react';
import NavBarButton from './NavBarButton/NavBarButton';

const Home: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  }
  return (
    <div>
       <NavBarButton label="Sign Up" onClick={handleButtonClick} />
    </div>
  );
}

export default Home;