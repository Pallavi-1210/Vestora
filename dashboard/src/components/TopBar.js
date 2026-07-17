import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points up">18,245.30 <i className="fa-solid fa-caret-up" style={{ fontSize: "10px", marginLeft: "4px" }}></i></p>
          <p className="percent up">+0.56%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points up">60,115.80 <i className="fa-solid fa-caret-up" style={{ fontSize: "10px", marginLeft: "4px" }}></i></p>
          <p className="percent up">+0.52%</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
