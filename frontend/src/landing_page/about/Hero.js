import React from "react";
import { FiTrendingUp } from "react-icons/fi";

function Hero() {
  return (
    <section className="container-fluid text-center py-5 bg-light">
      <div className="container">
        <FiTrendingUp size={70} className="text-primary mb-3" />
        <h1 className="fw-bold text-dark display-5">Invest in everything</h1>
        <p className="text-muted fs-5 mt-3">
          Stocks, mutual funds, derivatives, ETFs, and more — all in one place.
        </p>
        <button className="btn btn-primary btn-lg mt-4 shadow-sm">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Hero;
