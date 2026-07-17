import React from "react";

function RightSection({ icon, productName, productDescription, features, visualRows }) {
  return (
    <section className="product-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left — copy */}
          <div className="col-lg-6">
            <div className="product-icon-wrap">{icon}</div>
            <h2>{productName}</h2>
            <p className="mt-3">{productDescription}</p>
            {features && (
              <ul className="product-feature-list mt-3">
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Right — visual */}
          <div className="col-lg-6">
            <div className="product-visual-box">
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 16,
                }}
              >
                {productName}
              </div>
              {(visualRows || []).map((row, i) => (
                <div className="product-visual-row" key={i}>
                  <span className="pvr-icon">{row.icon}</span>
                  <span className="pvr-name">{row.name}</span>
                  {row.sub && (
                    <span style={{ color: "var(--color-muted)", fontSize: "0.82rem" }}>{row.sub}</span>
                  )}
                  {row.val && (
                    <span className={`pvr-val${row.neg ? " neg" : ""}`}>{row.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
