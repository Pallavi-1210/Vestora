import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="section-pricing-home">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* Left — heading */}
          <div className="col-lg-4">
            <span className="section-label">Pricing</span>
            <h2 className="section-heading mt-2">Simple &amp; Free</h2>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.75 }}>
              Vestora is completely free to use. All core features are included
              — no hidden charges, no subscription required.
            </p>
            <Link to="/pricing" className="btn-primary-vestora mt-3" style={{ width: "fit-content" }}>
              View pricing details
              <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
          </div>

          {/* Right — pricing cards */}
          <div className="col-lg-8">
            <div className="row g-4">
              {/* Free plan */}
              <div className="col-md-6">
                <div className="pricing-card featured">
                  <div className="plan-name">Free</div>
                  <div className="price-tag">₹0 <span>/ forever</span></div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", marginBottom: 0 }}>
                    Full access to all portfolio management tools.
                  </p>
                  <ul className="mt-3">
                    <li>Portfolio Tracking</li>
                    <li>Holdings Management</li>
                    <li>Order History</li>
                    <li>Position Monitoring</li>
                    <li>Analytics Dashboard</li>
                    <li>Interactive Charts</li>
                    <li>Secure Authentication</li>
                  </ul>
                  <Link to="/signup" className="btn-primary-vestora" style={{ width: "100%", justifyContent: "center" }}>
                    Get Started Free
                  </Link>
                </div>
              </div>

              {/* Pro plan (coming soon) */}
              <div className="col-md-6">
                <div className="pricing-card" style={{ opacity: 0.7 }}>
                  <div className="plan-name" style={{ color: "var(--color-muted)" }}>Pro</div>
                  <div className="price-tag" style={{ color: "var(--color-muted)" }}>
                    Coming <span>soon</span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", marginBottom: 0 }}>
                    Advanced features planned for the future.
                  </p>
                  <ul className="mt-3">
                    <li>Everything in Free</li>
                    <li>Advanced Chart Indicators</li>
                    <li>Export Portfolio Data</li>
                    <li>Multi-Portfolio Support</li>
                    <li>Performance Reports</li>
                  </ul>
                  <button
                    className="btn-outline-vestora"
                    style={{ width: "100%", justifyContent: "center", cursor: "default", opacity: 0.5 }}
                    disabled
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
