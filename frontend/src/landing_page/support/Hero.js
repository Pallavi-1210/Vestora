import React from "react";

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <span
              className="section-label mb-3"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Help Center
            </span>

            <h1 className="mt-3">How can we help?</h1>

            <p>
              Browse help topics and frequently asked questions to find quick
              solutions about your Vestora account, portfolio, holdings, orders,
              positions, and analytics.
            </p>

            {/* Quick topic tags */}
            <div className="support-topics">
              {[
                "Account Setup",
                "Adding Holdings",
                "Order History",
                "Positions",
                "Analytics",
                "Login Issues",
              ].map((tag) => (
                <span key={tag} className="support-topic-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
