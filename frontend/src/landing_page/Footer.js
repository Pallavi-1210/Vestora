import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="vestora-footer">
      <div className="container">
        <div className="row pb-4">
          {/* Brand column */}
          <div className="col-lg-4 mb-4 mb-lg-0 pe-lg-5">
            <div className="footer-brand">
              Vest<span>ora</span>
            </div>
            <p className="footer-tagline">
              A portfolio management platform built for tracking investments, 
              monitoring positions, and understanding your financial data.
            </p>
          </div>

          {/* Company column */}
          <div className="col-6 col-lg-2 mb-4 mb-lg-0">
            <h6>Company</h6>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/products">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>

          {/* Features column */}
          <div className="col-6 col-lg-3 mb-4 mb-lg-0">
            <h6>Features</h6>
            <div className="footer-links">
              <Link to="/products">Portfolio Tracking</Link>
              <Link to="/products">Holdings Management</Link>
              <Link to="/products">Order History</Link>
              <Link to="/products">Analytics Dashboard</Link>
              <Link to="/products">Interactive Charts</Link>
            </div>
          </div>

          {/* Legal column */}
          <div className="col-6 col-lg-3 mb-4 mb-lg-0">
            <h6>Legal</h6>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <Link to="/support">Contact Us</Link>
              <Link to="/support">Help Center</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="disclaimer">
            Vestora is a portfolio management and investment simulation platform developed for educational 
            and learning purposes. It does not facilitate real stock trading, provide investment advice, 
            or execute real market transactions. All portfolio data shown is simulated and should not be 
            considered actual trading activity.
          </p>
          <p className="disclaimer mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
            © {year} Vestora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
