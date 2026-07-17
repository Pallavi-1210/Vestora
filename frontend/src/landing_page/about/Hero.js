import React from "react";

function Hero() {
  return (
    <>
      {/* Page hero */}
      <section className="about-hero">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-label">About Vestora</span>

            <h1 className="mt-3">
              Simplifying investment tracking through technology
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-muted)",
                maxWidth: 580,
                margin: "16px auto 0",
                lineHeight: 1.75,
              }}
            >
              Vestora is a portfolio management platform built to help users
              understand their investments clearly and manage them in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="about-content-block">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <p>
                Vestora is an investment portfolio management platform designed
                to simplify the way users track and manage their investments.
                Our goal is to provide a secure and user-friendly environment
                where users can monitor their portfolio, analyze performance,
                and understand their investment journey.
              </p>

              <p>
                With a modern dashboard, Vestora enables users to manage
                holdings, track order history, monitor open positions, and get a
                clear overview of their portfolio at any point in time.
              </p>

              <p>
                We built Vestora to bridge the gap between complex financial
                data and simple digital experiences by providing the essential
                portfolio tools users need without unnecessary complexity.
              </p>
            </div>

            <div className="col-lg-6">
              <p>
                Vestora focuses on making investment tracking straightforward
                through interactive dashboards, data visualization, and a clean
                user experience for reviewing portfolio activity.
              </p>

              <p>
                The platform is built using modern full-stack technologies with
                secure authentication, efficient data management, and responsive
                interfaces to deliver a smooth user experience.
              </p>

              <p>
                Vestora is developed as a portfolio management and investment
                simulation platform for educational purposes. It does not
                facilitate real stock trading or provide financial advice.
              </p>
            </div>
          </div>

          {/* Values */}
          <div
            className="row g-4 mt-4 pt-4"
            style={{
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {[
              {
                icon: "fa-solid fa-bullseye",
                title: "Clarity First",
                text: "Every feature is designed to present portfolio information in a simple and easy-to-understand way.",
              },
              {
                icon: "fa-solid fa-shield-halved",
                title: "Secure by Design",
                text: "Your account and portfolio information are protected through secure authentication and modern security practices.",
              },
              {
                icon: "fa-solid fa-code",
                title: "Built to Learn",
                text: "Vestora is a full-stack portfolio management project developed to demonstrate practical software engineering skills.",
              },
            ].map((v) => (
              <div className="col-md-4" key={v.title}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px 20px",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: 12,
                      color: "var(--color-primary)",
                    }}
                  >
                    <i className={v.icon}></i>
                  </div>

                  <h5
                    style={{
                      fontWeight: 700,
                      color: "var(--color-dark)",
                      marginBottom: 8,
                    }}
                  >
                    {v.title}
                  </h5>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-muted)",
                      margin: 0,
                      lineHeight: 1.65,
                    }}
                  >
                    {v.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
