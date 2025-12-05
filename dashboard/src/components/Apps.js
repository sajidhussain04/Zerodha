import React from "react";
import { FaChartLine, FaWallet, FaRobot, FaCoins, FaChartPie, FaCogs } from "react-icons/fa";
import "../index.css";

const appsList = [
  {
    name: "Kite",
    description: "Modern trading and investment platform for the smart investor.",
    icon: <FaChartLine className="app-icon" />,
    color: "#4184f3",
    link: "#"
  },
  {
    name: "Coin",
    description: "Buy direct mutual funds and save commissions.",
    icon: <FaCoins className="app-icon" />,
    color: "#ff9800",
    link: "#"
  },
  {
    name: "Console",
    description: "Analytics and portfolio tracking platform.",
    icon: <FaChartPie className="app-icon" />,
    color: "#673ab7",
    link: "#"
  },
  {
    name: "Kite Connect API",
    description: "Build powerful trading apps with our APIs.",
    icon: <FaCogs className="app-icon" />,
    color: "#009688",
    link: "#"
  },
  {
    name: "Streak",
    description: "Algorithmic trading without coding.",
    icon: <FaRobot className="app-icon" />,
    color: "#e91e63",
    link: "#"
  },
  {
    name: "Varsity",
    description: "Comprehensive educational modules on markets.",
    icon: <FaWallet className="app-icon" />,
    color: "#4caf50",
    link: "#"
  },
];

const Apps = () => {
  return (
    <div className="apps-container">
      <h2 className="title">Explore our apps</h2>
      <p className="subtitle">
        Trade smarter, learn faster, and invest better with these platforms.
      </p>

      <div className="apps-grid">
        {appsList.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-icon-container" style={{ backgroundColor: app.color }}>
              {app.icon}
            </div>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
            <a href={app.link} target="_blank" rel="noreferrer" className="btn btn-blue">
              Open App
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
