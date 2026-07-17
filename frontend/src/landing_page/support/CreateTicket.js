import React, { useState } from "react";

const faqItems = [
  {
    q: "What is Vestora?",
    a: "Vestora is a portfolio management and investment simulation platform. It lets you track holdings, view order history, monitor positions, and analyze your portfolio performance — all in one dashboard.",
  },
  {
    q: "Is Vestora a stock broker?",
    a: "No. Vestora is not a stock broker and does not facilitate real stock trading. It is a portfolio tracking and management platform for educational and learning purposes.",
  },
  {
    q: "How do I add holdings to my portfolio?",
    a: "After logging in, navigate to the Dashboard and use the Holdings section to add stocks to your portfolio. You can specify the stock name, quantity, and purchase details.",
  },
  {
    q: "Can I view my order history?",
    a: "Yes. The Orders section of the dashboard shows a complete log of all your buy and sell transactions, organized by date and stock symbol.",
  },
  {
    q: "How do I check my positions?",
    a: "Go to the Positions section in your dashboard to see all currently open positions with their current status and performance details.",
  },
  {
    q: "Is my account data secure?",
    a: "Yes. Vestora uses secure authentication to protect your account. Your login credentials are encrypted and your portfolio data is only accessible to you.",
  },
  {
    q: "Is Vestora free to use?",
    a: "Yes, Vestora is completely free. All core features — portfolio tracking, order history, positions, analytics, and charts — are available at no cost.",
  },
];

function Support() {
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      icon: "fa-regular fa-user",
      title: "Account & Login",
      links: ["Account Setup", "Password Reset", "Login Issues"],
    },
    {
      icon: "fa-solid fa-wallet",
      title: "Portfolio & Holdings",
      links: ["Add Holdings", "Update Portfolio", "Remove Holdings"],
    },
    {
      icon: "fa-solid fa-receipt",
      title: "Orders",
      links: ["Order History", "Order Details", "Order Status"],
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Positions",
      links: ["Open Positions", "Closed Positions", "Performance"],
    },
    {
      icon: "fa-solid fa-chart-pie",
      title: "Analytics",
      links: ["Portfolio Analysis", "Performance Charts", "Returns"],
    },
    {
      icon: "fa-solid fa-screwdriver-wrench",
      title: "Technical Issues",
      links: ["Page Loading", "Data Sync", "Browser Issues"],
    },
  ];

  return (
    <>
      {/* Help categories */}
      <section className="support-content">
        <div className="container">
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.6rem",
              color: "var(--color-dark)",
              marginBottom: 32,
            }}
          >
            Browse Help Topics
          </h2>

          <div className="row g-4 mb-5">
            {categories.map((cat) => (
              <div className="col-md-4 col-sm-6" key={cat.title}>
                <div className="support-category-card">
                  <div className="cat-icon">
                    <i className={cat.icon}></i>
                  </div>

                  <h5>{cat.title}</h5>

                  {cat.links.map((link) => (
                    <a key={link} href="#faq">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div
            id="faq"
            className="mt-4 pt-4"
            style={{
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: "1.6rem",
                color: "var(--color-dark)",
                marginBottom: 24,
              }}
            >
              Frequently Asked Questions
            </h2>

            {faqItems.map((item, i) => (
              <div
                key={i}
                className="faq-item"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <h6 style={{ margin: 0 }}>{item.q}</h6>

                  <span
                    style={{
                      color: "var(--color-primary)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                    }}
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>

                {openFaq === i && (
                  <p
                    style={{
                      marginTop: 12,
                      marginBottom: 0,
                      fontSize: "0.9rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need more help */}
      <section className="support-contact-section">
        <div className="container">
          <div className="text-center py-5">
            <i
              className="fa-regular fa-circle-question"
              style={{
                fontSize: "3rem",
                color: "var(--color-primary)",
                marginBottom: "20px",
              }}
            ></i>

            <h2
              style={{
                fontWeight: 700,
                color: "var(--color-dark)",
                marginBottom: "12px",
              }}
            >
              Still Need Help?
            </h2>

            <p
              style={{
                color: "var(--color-muted)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Browse the help topics and FAQs above to quickly find answers
              about your portfolio, holdings, orders, positions, and analytics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
