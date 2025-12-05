import React from "react";
import { FaShieldAlt, FaBullseye, FaGlobeAsia, FaLightbulb } from "react-icons/fa";

function Stats() {
  return (
    <section className="container py-5">
      <h2 className="fw-bold text-center mb-5 text-dark">
        <FaShieldAlt className="text-primary me-2" />
        Trust with confidence
      </h2>
      <div className="row">
        <div className="col-md-3 text-center">
          <FaBullseye size={40} className="text-primary mb-3" />
          <h5>Customer-first</h5>
          <p className="text-muted">1.6+ crore investors trust us daily.</p>
        </div>
        <div className="col-md-3 text-center">
          <FaLightbulb size={40} className="text-warning mb-3" />
          <h5>No gimmicks</h5>
          <p className="text-muted">Clean apps. No spam. No distractions.</p>
        </div>
        <div className="col-md-3 text-center">
          <FaGlobeAsia size={40} className="text-success mb-3" />
          <h5>Innovation</h5>
          <p className="text-muted">Ecosystem of 30+ fintech startups.</p>
        </div>
        <div className="col-md-3 text-center">
          <FaShieldAlt size={40} className="text-info mb-3" />
          <h5>Do better with money</h5>
          <p className="text-muted">Smart tools like Nudge and Kill Switch.</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
