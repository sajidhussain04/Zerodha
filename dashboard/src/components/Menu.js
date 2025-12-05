import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaClipboardList, FaWallet, FaChartLine, FaCogs, FaAppStore } from "react-icons/fa";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
    { name: "Holdings", path: "/holdings", icon: <FaWallet /> },
    { name: "Positions", path: "/positions", icon: <FaChartLine /> },
    { name: "Funds", path: "/funds", icon: <FaWallet /> },
    { name: "Apps", path: "/apps", icon: <FaAppStore /> },
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                style={{ textDecoration: "none" }}
                onClick={() => setSelectedMenu(index)}
              >
                <p className={selectedMenu === index ? "menu selected" : "menu"}>
                  {item.icon} &nbsp; {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">SU</div>
          <p className="username">Sajid</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
