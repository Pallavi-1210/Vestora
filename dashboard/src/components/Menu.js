import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/logout`,
        {},
        {
          withCredentials: true,
        },
      );

      alert(res.data.message);
      window.location.replace(process.env.REACT_APP_FRONTEND_URL);
    } catch (err) {
      alert(err.response?.data?.message || "Logout Failed");
    }
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // for highlighting menu
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <div className="brand-logo" onClick={() => window.location.replace("/")}>
        <div className="brand-v">V</div>
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                <i className="fa-solid fa-chart-line"></i> Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                <i className="fa-solid fa-clock-rotate-left"></i> Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                <i className="fa-solid fa-briefcase"></i> Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                <i className="fa-solid fa-arrow-trend-up"></i> Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                <i className="fa-solid fa-cubes"></i> Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">Ve</div>
          <p className="username">USERID</p>
        </div>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
          style={{ marginLeft: "12px" }}
        >
          <i
            className="fa-solid fa-right-from-bracket"
            style={{ marginRight: "6px" }}
          ></i>{" "}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
