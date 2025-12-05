import React from "react";

function Universe() {
  return (
    <div class="container" style={{ marginTop: "5rem" }}>
      <div class="row text-center">
        <h3 class=" text-muted">The Zerodha Universe</h3>
        <p class="text-muted fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div class="row text-center p-5">
          <div class="col-4">
            <img
              src="media\images\zerodhaFundhouse.png"
              class="mb-3"
              style={{ width: "200px", height: "auto" }}
            />
            <p class="text-small text-muted " style={{ fontSize: "13px" }}>
              Our asset management venture <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div class="col-4">
            <img
              src="media\images\sensibullLogo.svg"
              class="mb-3"
              style={{ width: "200px", height: "auto" }}
            ></img>
            <p class="text-small text-muted" style={{ fontSize: "13px" }}>
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div class="col-4">
            <img
              src="media\images\tijori.svg"
              class="mb-2"
              style={{ width: "110px", height: "auto" }}
            ></img>
            <p class="text-small text-muted" style={{ fontSize: "13px" }}>
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
          <div class="col-4 mt-5">
            <img
              src="media\images\streakLogo.png"
              class="mb-3"
              style={{ width: "200px", height: "auto" }}
            ></img>
            <p class="text-small text-muted" style={{ fontSize: "13px" }}>
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div class="col-4 mt-5">
            <img
              src="media\images\smallcaseLogo.png"
              class="mb-3"
              style={{ width: "200px", height: "auto" }}
            ></img>
            <p class="text-small text-muted" style={{ fontSize: "13px" }}>
              Thematic investing platform
              <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div class="col-4 mt-5">
            <img
              src="media\images\dittoLogo.png"
              class="mb-3"
              style={{ width: "200px", height: "auto" }}
            ></img>
            <p class="text-small text-muted" style={{ fontSize: "13px" }}>
              Personalized advice on life
              <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </div>
        </div>
        <div>
          <button
            class="p-2 btn btn-primary fs-5 mt-2 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
