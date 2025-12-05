import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaInfoCircle, FaBox, FaTags, FaLifeRing } from "react-icons/fa";

function Navbar() {
  return (
    <div className="container-fluid shadow-sm sticky-top bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "120px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/signup">
                  <FaUserPlus /> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/about">
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/product">
                  <FaBox /> Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/pricing">
                  <FaTags /> Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-1" to="/support">
                  <FaLifeRing /> Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
