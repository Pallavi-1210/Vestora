import React from "react";
import { Link } from "react-router-dom";

const freeFeatures = [
  { text: "Portfolio Tracking" },
  { text: "Holdings Management" },
  { text: "Order History" },
  { text: "Position Monitoring" },
  { text: "Analytics Dashboard" },
  { text: "Interactive Charts" },
  { text: "Secure Authentication" },
  { text: "Unlimited Transactions" },
];

const proFeatures = [
  { text: "Everything in Free" },
  { text: "Advanced Chart Indicators" },
  { text: "Export Portfolio Data (CSV)" },
  { text: "Multi-Portfolio Support" },
  { text: "Detailed Performance Reports" },
  { text: "Priority Support" },
];

function Brokerage() {
  return (
    <section className="pricing-page-section">
      <div className="container">
        {/* Plans */}
        <div className="row g-4 mb-5">
          {/* Free plan */}
          <div className="col-md-6">
            <div className="pricing-page-card featured">
              <div className="plan-badge">Free</div>
              <h2>₹0</h2>
              <p className="price-sub">Free forever — no credit card required</p>

              <ul>
                {freeFeatures.map((f) => (
                  <li key={f.text}>
                    <span className="li-icon">✓</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link to="/signup" className="btn-primary-vestora" style={{ width: "100%", justifyContent: "center" }}>
                Get Started Free
              </Link>
            </div>
          </div>

          {/* Pro plan */}
          <div className="col-md-6">
            <div className="pricing-page-card" style={{ opacity: 0.75 }}>
              <div className="plan-badge" style={{ background: "#f3f4f6", color: "var(--color-muted)" }}>
                Pro — Coming Soon
              </div>
              <h2 style={{ color: "var(--color-muted)" }}>TBD</h2>
              <p className="price-sub">Advanced features — planned for a future release</p>

              <ul>
                {proFeatures.map((f) => (
                  <li key={f.text}>
                    <span className="li-icon" style={{ color: "var(--color-muted)" }}>○</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button
                className="btn-outline-vestora"
                style={{ width: "100%", justifyContent: "center", opacity: 0.5, cursor: "not-allowed" }}
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* Feature comparison note */}
        <div
          style={{
            background: "var(--color-primary-lt)",
            border: "1px solid #c7d2fe",
            borderRadius: "var(--radius-md)",
            padding: "24px 28px",
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          <h5 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: 8 }}>
            What does "Free" actually mean?
          </h5>
          <p style={{ fontSize: "0.92rem", color: "var(--color-text)", margin: 0, lineHeight: 1.7 }}>
            Vestora is a portfolio management and simulation platform — not a brokerage. 
            There are no trading fees, no account charges, and no subscription costs. 
            Creating an account gives you full access to all portfolio tracking features 
            at no cost.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
