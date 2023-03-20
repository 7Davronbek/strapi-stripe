import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link to="/">LOGO</Link>
          </div>
          <div className="col-9">
            <Link className="me-3" to="/products">
              PRODUCTS
            </Link>
            <Link className="me-3" to="/product/12">
              SINGLE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
