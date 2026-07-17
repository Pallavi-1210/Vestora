import React from "react";

function Team() {
  return (
    <section className="team-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-5">
          <span className="section-label">The Builder</span>
          <h2 className="section-heading mt-2">People behind Vestora</h2>
        </div>

        <div className="row justify-content-center">
          {/* Developer card */}
          <div className="col-md-8 col-lg-8">
            <div className="team-card">
              <img
                src="media/images/pallavi.png"
                alt="Pallavi – MERN Stack Developer"
              />
              <h4>Pallavi</h4>
              <div className="role">MERN Stack Developer</div>
              <p>
                Pallavi is a B.Tech CSE student and web developer who built
                Vestora as a full-stack project. She works with React.js,
                Node.js, Express, and MongoDB to create clean, functional web
                applications.
              </p>
              <p>
                Vestora showcases her skills in building secure authentication
                systems, REST APIs, interactive dashboards, and responsive user
                interfaces.
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/Pallavi-1210"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-vestora"
                  style={{ padding: "10px 20px", fontSize: "0.9rem" }}
                >
                  <i className="fa fa-github me-2" aria-hidden="true"></i>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
        <div
          className="text-center mt-5 pt-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <h5
            style={{
              fontWeight: 600,
              color: "var(--color-muted)",
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: 20,
            }}
          >
            Built With
          </h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "React.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Bootstrap",
              "React Router",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  background: "var(--color-white)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "7px 16px",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
