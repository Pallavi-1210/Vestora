import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="vestora-navbar navbar navbar-expand-lg">
      <div className="container py-2">
        {/* Brand */}
        <Link className="navbar-brand text-decoration-none" to="/">
          <span className="vestora-navbar navbar-brand-text">
            Vest<span>ora</span>
          </span>
        </Link>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#vestoraNav"
          aria-controls="vestoraNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="vestoraNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link${isActive("/") ? " active-link" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive("/products") ? " active-link" : ""}`}
                to="/products"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive("/pricing") ? " active-link" : ""}`}
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive("/about") ? " active-link" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link${isActive("/support") ? " active-link" : ""}`}
                to="/support"
              >
                Support
              </Link>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="d-flex align-items-center gap-2">
            <Link to="/login" className="btn-nav-login">
              Login
            </Link>
            <Link to="/signup" className="btn-nav-signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
