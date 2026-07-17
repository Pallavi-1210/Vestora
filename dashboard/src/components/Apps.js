import React from "react";

const Apps = () => {
  return (
    <div className="apps-container">
      <i
        className="fa-solid fa-cubes"
        style={{
          fontSize: "3.5rem",
          color: "var(--blue-accent)",
          opacity: "0.9",
          marginBottom: "16px",
        }}
      ></i>

      <h3>Vestora Ecosystem</h3>

      <p>
        Access future integrations, smart tools, and partner services—all
        designed to make portfolio management more powerful, seamless, and
        efficient.
      </p>

      <button className="btn btn-blue" style={{ marginTop: "12px" }}>
        <i
          className="fa-solid fa-clock"
          style={{ marginRight: "6px" }}
        ></i>
        Coming Soon
      </button>
    </div>
  );
};

export default Apps;