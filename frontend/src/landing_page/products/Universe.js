import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <section className="universe-section">
      <div className="container">
        <span
          className="section-label"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Why Choose Vestora
        </span>

        <h2 className="mt-3">Built for simple portfolio management</h2>

        <p>
          Vestora provides the essential tools required to manage investments,
          review transactions, and monitor portfolio performance from one
          organized dashboard.
        </p>

        {/* Feature grid */}
        <div className="row g-4 mb-5">
          {[
            {
              icon: "fa-solid fa-chart-pie",
              name: "Portfolio Tracking",
              text: "Track all your investments and monitor portfolio performance from a single dashboard.",
            },
            {
              icon: "fa-solid fa-file-invoice",
              name: "Order History",
              text: "Review every buy and sell transaction with a complete and organized history.",
            },
            {
              icon: "fa-solid fa-chart-line",
              name: "Portfolio Analytics",
              text: "Analyze portfolio returns, holdings summary, and investment performance.",
            },
            {
              icon: "fa-solid fa-shield-halved",
              name: "Secure Authentication",
              text: "Your account is protected with secure authentication and private access.",
            },
          ].map((item) => (
            <div className="col-md-6" key={item.name}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px 20px",
                  height: "100%",
                  transition: "var(--transition)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <div
                  style={{
                    fontSize: "1.7rem",
                    marginBottom: 14,
                    color: "#818cf8",
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                <h5
                  style={{
                    fontWeight: 700,
                    color: "var(--color-white)",
                    marginBottom: 10,
                  }}
                >
                  {item.name}
                </h5>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/signup" className="btn-cta-white">
          Create Account
          <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  );
}

export default Universe;
