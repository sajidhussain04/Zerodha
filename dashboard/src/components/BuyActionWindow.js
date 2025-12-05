import React, { useState, useContext } from "react";
import axios from "axios";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });
      closeBuyWindow();
      alert("✅ Order placed successfully!");
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("❌ Order failed!");
    }
  };

  return (
    <div className="container">
      <div className="regular-order">
        <h3>
          <FaShoppingCart /> Buy {uid}
        </h3>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              min={1}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              min={0}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-blue" onClick={handleBuyClick}>
          Buy
        </button>
        <button className="btn btn-grey" onClick={closeBuyWindow}>
          <FaTimes /> Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;
