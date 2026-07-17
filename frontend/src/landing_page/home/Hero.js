import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="vestora-hero">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* LEFT */}
          <div className="col-lg-6">
            <span className="hero-tag">
              <i className="fa-solid fa-chart-pie me-2"></i>
              Investment Portfolio Management
            </span>

            <h1 className="hero-title mt-4">
              Manage Your Investments
              <span className="highlight"> with Vestora</span>
            </h1>

            <p className="hero-description mt-4">
              Track your watchlist, manage holdings, review orders, monitor
              positions, and analyze your investment portfolio through one
              simple dashboard.
            </p>

            <div className="hero-features mt-4">
              <div className="feature-item">
                <i className="fa-regular fa-bookmark"></i>
                Watchlist
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-briefcase"></i>
                Holdings
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-receipt"></i>
                Orders
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-chart-line"></i>
                Positions
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-chart-simple"></i>
                Analytics
              </div>

              <div className="feature-item">
                <i className="fa-solid fa-lock"></i>
                Secure Login
              </div>
            </div>

            <div className="hero-buttons mt-5">
              <Link to="/signup" className="btn-primary-vestora">
                Get Started
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>

              <Link to="/products" className="btn-outline-vestora">
                View Features
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="col-lg-6">
            <div className="hero-dashboard-card">
              <div className="dashboard-top">
                <div>
                  <h5>Portfolio Dashboard</h5>

                  <small>Vestora Workspace</small>
                </div>

                <i
                  className="fa-solid fa-chart-pie"
                  style={{ fontSize: 24 }}
                ></i>
              </div>

              <div className="dashboard-grid">
                <div className="dashboard-box">
                  <i className="fa-regular fa-bookmark"></i>

                  <div>
                    <span>Watchlist</span>
                    <small>8 Stocks</small>
                  </div>
                </div>

                <div className="dashboard-box">
                  <i className="fa-solid fa-briefcase"></i>

                  <div>
                    <span>Holdings</span>
                    <small>12 Stocks</small>
                  </div>
                </div>

                <div className="dashboard-box">
                  <i className="fa-solid fa-receipt"></i>

                  <div>
                    <span>Orders</span>
                    <small>Buy & Sell</small>
                  </div>
                </div>

                <div className="dashboard-box">
                  <i className="fa-solid fa-chart-line"></i>

                  <div>
                    <span>Positions</span>
                    <small>Monitor</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
