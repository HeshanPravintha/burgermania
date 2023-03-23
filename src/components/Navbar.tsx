// import { BsSearch } from "react-icons/bs";
import NavBarButton from "./NavBarButton/NavBarButton";
import '../App.css'

const Navbar = () => {
  const handleButtonClick = () => console.log("Button clicked!");
  return (
    <nav>
      <div className="logo-container">
        <img src={require("../assets/logo.png")} alt="logo" />
      </div>
      <div className="navbar-phone-container">
        <a href="">(+94) 77 777 7777</a>
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Menu</a>
        <a href="">Contact Us</a>
        <a href=""></a>
        {/* <a href="">
          <BsSearch className="navbar-cart-icon" />
        </a> */}
        <NavBarButton label="Login" onClick={handleButtonClick} />
        <NavBarButton label="SignUp" onClick={handleButtonClick} />
        <NavBarButton label="Order Now" onClick={handleButtonClick} />
        {/* <button className="primary-button">Login</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
