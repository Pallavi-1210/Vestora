import React from "react";

const features = [
  {
    icon: "fa-solid fa-chart-line",
    title: "Portfolio Tracking",
    description:
      "Track all your investments from a single dashboard with a clear overview of your portfolio.",
  },
  {
    icon: "fa-solid fa-wallet",
    title: "Holdings Management",
    description:
      "View your holdings along with quantity, average price, current price, and portfolio value.",
  },
  {
    icon: "fa-solid fa-arrow-right-arrow-left",
    title: "Order Management",
    description:
      "Access your complete buy and sell transaction history in one organized place.",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Portfolio Overview",
    description:
      "Get a consolidated view of your holdings, orders, watchlist and investment summary from one dashboard.",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Portfolio Analytics",
    description:
      "Understand your portfolio through charts and summarized investment insights.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Secure Authentication",
    description:
      "Protect your account with secure login, registration, logout and authenticated access.",
  },
];
function Awards() {
  return (
    <section className="section-why py-5">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="section-label">Why Vestora</span>

            <h2 className="section-heading mt-3">
              Everything you need to manage your investment portfolio
            </h2>

            <p className="section-subheading mt-3">
              Vestora provides the essential tools to manage holdings, monitor
              transactions, review positions, and analyze portfolio performance
              through a simple and intuitive interface.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-md-6 col-lg-4" key={feature.title}>
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>

                <h5 className="mt-4 mb-3">{feature.title}</h5>

                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
