import React from "react";
import { FaTwitter, FaGlobe, FaComments } from "react-icons/fa";

function Team() {
  return (
    <section className="container text-center py-5">
      <h2 className="fw-bold text-dark mb-5">Our Leadership</h2>
      <div className="row align-items-center">
        <div className="col-md-5">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle shadow-sm"
            style={{ width: "60%", maxWidth: "250px" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <p className="text-muted">Founder & CEO</p>
        </div>
        <div className="col-md-7 text-muted text-start">
          <p>
            Nithin bootstrapped Zerodha to simplify trading for millions of
            Indians. Today, Zerodha leads innovation in financial technology.
          </p>
          <p>
            He serves on SEBI advisory committees and actively promotes investor
            awareness.
          </p>
          <div className="mt-3">
            <a href="#" className="text-primary me-3 fs-5"><FaGlobe /></a>
            <a href="#" className="text-primary me-3 fs-5"><FaComments /></a>
            <a href="#" className="text-primary fs-5"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
