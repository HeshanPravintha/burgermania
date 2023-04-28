import React from "react";
import NavBarButton from "./NavBarButton/NavBarButton";
import Navbar from "./Navbar";

const Cart: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
