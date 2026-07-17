import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <i
            className="fa-solid fa-chart-pie section-icon"
            style={{ color: "var(--blue-accent)" }}
          ></i>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <span>
          <i
            className="fa-solid fa-briefcase section-icon"
            style={{ color: "var(--blue-accent)" }}
          ></i>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>
              1.55k{" "}
              <small
                style={{
                  color: "#1A1F2E",
                  fontWeight: "600",
                }}
              >
                +5.20%
              </small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;