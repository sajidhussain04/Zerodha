import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChartLine } from "react-icons/fa";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => setPositions(res.data))
      .catch((err) => console.error("Error fetching positions:", err));
  }, []);

  return (
    <div className="positions-container">
      <h2 className="title">
        <FaChartLine /> &nbsp; Open Positions
      </h2>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&amp;L</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, i) => {
              const pnl = pos.price * pos.qty - pos.avg * pos.qty;
              return (
                <tr key={i}>
                  <td>{pos.product}</td>
                  <td>{pos.name}</td>
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl >= 0 ? "▲" : "▼"} ₹ {Math.abs(pnl).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
