import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown, FaExchangeAlt, FaInfoCircle } from "react-icons/fa";
import "../index.css";

const Funds = () => {
  const balance = 84250.75;
  const marginUsed = 16320.4;
  const availableMargin = balance - marginUsed;

  return (
    <div className="funds-container">
      <h2 className="title">Funds Overview</h2>
      <p className="subtitle">
        Manage your account balance, transfer funds, and monitor your margins.
      </p>

      {/* Balance Summary */}
      <div className="fund-summary">
        <div className="fund-card balance">
          <FaWallet className="fund-icon" />
          <div>
            <h3>Account Balance</h3>
            <p>₹ {balance.toLocaleString()}</p>
          </div>
        </div>

        <div className="fund-card margin-used">
          <FaExchangeAlt className="fund-icon" />
          <div>
            <h3>Margin Used</h3>
            <p>₹ {marginUsed.toLocaleString()}</p>
          </div>
        </div>

        <div className="fund-card available">
          <FaArrowUp className="fund-icon" />
          <div>
            <h3>Available Margin</h3>
            <p>₹ {availableMargin.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fund-actions">
        <button className="btn btn-green">
          <FaArrowUp /> &nbsp; Add Funds
        </button>
        <button className="btn btn-blue">
          <FaArrowDown /> &nbsp; Withdraw Funds
        </button>
      </div>

      {/* UPI Info Section */}
      <div className="fund-note">
        <FaInfoCircle className="info-icon" />
        <p>
          Instant, zero-cost fund transfers are supported via UPI.  
          Ensure your registered UPI ID is linked with your trading account.
        </p>
      </div>
    </div>
  );
};

export default Funds;
