import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center mb-3" style={{ marginTop: "6rem" }}>
          Charges
        </h2>
        <h4 className="text-center text-body-tertiary mt-2">
          List of all charges and taxes
        </h4>

        <div className="row p-5 text-center" style={{ marginTop: "7rem" }}>
          <div className="col-4 text-center p-4">
            <img
              src="media/images/pricingEquity.svg"
              style={{ width: "70%" }}
              alt="Equity Delivery"
            />
            <h1 className="fs-4">Free equity delivery</h1>
            <p className="text-muted">
              All equity delivery investments (NSE, BSE),
              <br /> are absolutely free — ₹0 brokerage.
            </p>
          </div>

          <div className="col-4 text-center p-4">
            <img
              src="media/images/intradayTrades.svg"
              style={{ width: "70%" }}
              alt="Intraday & F&O"
            />
            <h1 className="fs-4">Intraday and F&O trades</h1>
            <p className="text-muted">
              Flat ₹20 or 0.03% (whichever is lower) per <br />
              executed order on intraday trades across <br />
              equity, currency, and commodity trades. Flat <br />
              ₹20 on all option trades.
            </p>
          </div>

          <div className="col-4 text-center p-4">
            <img
              src="media/images/pricing0.svg"
              style={{ width: "70%" }}
              alt="Mutual Funds"
            />
            <h1 className="fs-4">Free direct MF</h1>
            <p className="text-muted">
              All direct mutual fund investments are <br /> absolutely free — ₹0
              commissions & DP <br /> charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
