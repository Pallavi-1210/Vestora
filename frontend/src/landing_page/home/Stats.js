import React from "react";

const stats = [
  {
    icon: "fa-regular fa-bookmark",
    title: "Watchlist",
    description:
      "Save and monitor stocks before adding them to your investment portfolio.",
  },
  {
    icon: "fa-solid fa-wallet",
    title: "Holdings",
    description:
      "View all your holdings with quantity, average price and current portfolio value.",
  },
  {
    icon: "fa-solid fa-arrow-right-arrow-left",
    title: "Orders",
    description:
      "Maintain a complete history of every buy and sell transaction in one place.",
  },
  {
    icon: "fa-solid fa-chart-column",
    title: "Portfolio Analytics",
    description:
      "Understand your portfolio using charts and performance summaries.",
  },
];

function Stats() {
  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">Platform</span>

          <h2 className="mt-3 fw-bold">Everything You Need in One Dashboard</h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            Vestora brings together all the essential tools required to manage
            your investment portfolio through a clean and easy-to-use interface.
          </p>
        </div>

        <div className="row g-4">
          {stats.map((item) => (
            <div className="col-md-6" key={item.title}>
              <div className="stats-card">
                <div className="stats-icon">
                  <i className={item.icon}></i>
                </div>

                <h5>{item.title}</h5>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
