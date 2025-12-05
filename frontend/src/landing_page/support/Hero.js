import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="section">
      <div class="p-3" id="wrapper">
        <h2 class="fs-3 mt-3">Support Portal</h2>
        <a class="mt-3" href="" id="gp-link">
          Track Tickets
        </a>
      </div>
      <div className="row p-4">
        <div className="col-6 p-4 text-center">
          <h4>
            Search for an answer or browse help topics<br></br> to create a
            ticket
          </h4>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          
          <div className="mt-2 p-2">
            <a className="gp-link d-block mb-2" id="gp-link" href="#">
              Track account opening
            </a>
            <a className="gp-link d-block mb-2" id="gp-link" href="#">
              Track segment activation
            </a>
            <a className="gp-link d-block mb-2" id="gp-link" href="#">
              Intraday margins
            </a>
            <a className="gp-link d-block" id="gp-link" href="#">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-6 p-4">
          <h4 class="fs-3">Featured</h4>
          <ol>
            <li>
              <a className="gp-link d-block mb-2" id="gp-link" href="">
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
            <li>
              <a className="gp-link d-block mb-2" id="gp-link" href="">
                Surveillance measure on scrips - September 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
