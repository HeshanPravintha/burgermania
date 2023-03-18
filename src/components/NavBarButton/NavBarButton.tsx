import React from 'react';
import '../NavBarButton/NavBarButton.css';

type NavBarButtonProps = {
  label: string;
  onClick: () => void;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ label, onClick }) => {
  return (
    <button className="navbar-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default NavBarButton;
