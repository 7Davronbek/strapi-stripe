import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link to="/">LOGO</Link>
          </div>
          <div className="col-9">
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
