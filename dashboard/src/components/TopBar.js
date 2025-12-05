import React from "react";
import { FaChartLine } from "react-icons/fa";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <FaChartLine className="section-icon" />
          <p className="index">NIFTY 50</p>
          <p className="index-points">22,540.60</p>
          <p className="percent up">+0.45%</p>
        </div>
        <div className="sensex">
          <FaChartLine className="section-icon" />
          <p className="index">SENSEX</p>
          <p className="index-points">74,890.22</p>
          <p className="percent down">-0.22%</p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
