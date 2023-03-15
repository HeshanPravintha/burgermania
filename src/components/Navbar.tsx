// import { BsSearch } from "react-icons/bs";

const Navbar = () => {
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
        <button className="primary-button">Sign up</button>
        {/* <button className="primary-button">Login</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
