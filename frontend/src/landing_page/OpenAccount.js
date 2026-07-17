import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="section-cta">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <span className="section-label" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }}>
              Get Started
            </span>
            <h1 className="mt-2">
              Start Managing Your Portfolio Today
            </h1>
            <p>
              Create a free account and get instant access to portfolio tracking, 
              order history, position monitoring, and analytics — all in one dashboard.
            </p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link to="/signup" className="btn-cta-white me-3">
              Create Free Account
              <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
            <Link
              to="/products"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "0.95rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              See all features →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
