import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allHoldings");
        setAllHoldings(res.data || []);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };
    fetchHoldings();
  }, []);

  // Filter out rows with all zeros or empty values
  const filteredHoldings = allHoldings.filter(stock => {
    const qty = Number(stock.qty) || 0;
    const avg = Number(stock.avg) || 0;
    const price = Number(stock.price) || 0;
    const curValue = price * qty;
    const profitLoss = curValue - avg * qty;

    return (
      (stock.name && stock.name !== "") ||
      qty > 0 ||
      avg > 0 ||
      price > 0 ||
      curValue > 0 ||
      profitLoss !== 0 ||
      stock.net ||
      stock.day
    );
  });

  // Determine visible columns dynamically
  const columns = [
    { key: "name", label: "Instrument" },
    { key: "qty", label: "Qty." },
    { key: "avg", label: "Avg. cost" },
    { key: "price", label: "LTP" },
    { key: "curValue", label: "Cur. val" },
    { key: "profitLoss", label: "P&L" },
    { key: "net", label: "Net chg." },
    { key: "day", label: "Day chg." },
  ].filter(col => {
    return filteredHoldings.some(stock => {
      if (col.key === "curValue") {
        const qty = Number(stock.qty) || 0;
        const price = Number(stock.price) || 0;
        return qty * price > 0;
      }
      if (col.key === "profitLoss") {
        const qty = Number(stock.qty) || 0;
        const avg = Number(stock.avg) || 0;
        const price = Number(stock.price) || 0;
        return price * qty - avg * qty !== 0;
      }
      const val = stock[col.key];
      return val !== null && val !== undefined && val !== 0 && val !== "";
    });
  });

  // Helper to format numbers
  const format = (val) => (val && val !== 0 ? Number(val).toFixed(2) : null);

  // Totals
  const totalInvestment = filteredHoldings.reduce((sum, stock) => {
    const avg = Number(stock.avg) || 0;
    const qty = Number(stock.qty) || 0;
    return sum + (avg * qty);
  }, 0);

  const currentValue = filteredHoldings.reduce((sum, stock) => {
    const price = Number(stock.price) || 0;
    const qty = Number(stock.qty) || 0;
    return sum + (price * qty);
  }, 0);

  const totalPnL = currentValue - totalInvestment;
  const totalPnLPercent = totalInvestment > 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0;

  // Chart data
  const data = {
    labels: filteredHoldings.map(stock => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: filteredHoldings.map(stock => Number(stock.price) || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({filteredHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredHoldings.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: "center", color: "#777" }}>
                  No holdings to display
                </td>
              </tr>
            ) : (
              filteredHoldings.map((stock, index) => {
                const qty = Number(stock.qty) || 0;
                const avg = Number(stock.avg) || 0;
                const price = Number(stock.price) || 0;
                const curValue = price * qty;
                const profitLoss = curValue - avg * qty;
                const isProfit = profitLoss >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    {columns.map(col => {
                      if (col.key === "curValue") return <td key={col.key}>{format(curValue)}</td>;
                      if (col.key === "profitLoss") return <td key={col.key} className={profClass}>{format(profitLoss)}</td>;
                      if (col.key === "qty") return <td key={col.key}>{format(qty)}</td>;
                      if (col.key === "avg") return <td key={col.key}>{format(avg)}</td>;
                      if (col.key === "price") return <td key={col.key}>{format(price)}</td>;
                      if (col.key === "day") return <td key={col.key} className={dayClass}>{stock.day}</td>;
                      if (col.key === "net") return <td key={col.key}>{stock.net}</td>;
                      return <td key={col.key}>{stock[col.key]}</td>;
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="row">
        <div className="col">
          {totalInvestment > 0 && <h5>{format(totalInvestment)}</h5>}
          {totalInvestment > 0 && <p>Total investment</p>}
        </div>
        <div className="col">
          {currentValue > 0 && <h5>{format(currentValue)}</h5>}
          {currentValue > 0 && <p>Current value</p>}
        </div>
        <div className="col">
          {totalPnL !== 0 && <h5>{format(totalPnL)} ({totalPnLPercent}%)</h5>}
          {totalPnL !== 0 && <p>P&L</p>}
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
