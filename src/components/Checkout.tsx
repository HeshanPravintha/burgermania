import React from "react";
import NavBarButton from "./NavBarButton/NavBarButton";
import Navbar from "./Navbar";

const Checkout: React.FC = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <h1>Checkout Page</h1>
      <h1>Information</h1>
    </div>
  );
};

export default Checkout;
