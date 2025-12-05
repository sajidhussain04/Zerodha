import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaClipboardList,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import "../index.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h2 className="title">
          <FaClipboardList /> &nbsp; Orders
        </h2>
        <p className="subtitle">
          Track your executed and pending trades in real-time.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders-card">
          <FaClipboardList className="no-orders-icon" />
          <h3>No Orders Yet</h3>
          <p>
            You haven’t placed any trades today. Go to your <b>Watchlist</b> and
            place an order.
          </p>
        </div>
      ) : (
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Price (₹)</th>
                <th>Mode</th>
                <th>Status</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr key={i}>
                  <td>
                    {o.mode === "BUY" ? (
                      <span className="badge buy">
                        <FaArrowUp /> BUY
                      </span>
                    ) : (
                      <span className="badge sell">
                        <FaArrowDown /> SELL
                      </span>
                    )}
                  </td>
                  <td>{o.name}</td>
                  <td>{o.qty}</td>
                  <td>{o.price.toFixed(2)}</td>
                  <td>{o.mode}</td>
                  <td>
                    {o.status === "filled" ? (
                      <span className="status success">
                        <FaCheckCircle /> Filled
                      </span>
                    ) : (
                      <span className="status pending">
                        <FaTimesCircle /> Pending
                      </span>
                    )}
                  </td>
                  <td>
                    {new Date(o.createdAt || Date.now()).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
