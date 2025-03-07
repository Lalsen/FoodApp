import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logoOnly.png" alt="Logo" width="60" height="44" />
        </a>
        <a className="navbar-brand fw-bold" href="#">SWIGGY</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>  {/* FIXED */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
