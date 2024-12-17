import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Car Database
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/car-brands">
              Car Brands
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cars">
              Cars
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/car-parts">
              Car Parts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
