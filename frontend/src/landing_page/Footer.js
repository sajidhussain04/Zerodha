import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaUserCircle,
  FaLifeRing,
  FaBuilding,
  FaLink,
  FaMoneyBillWave,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-light text-muted">
      <div className="container border-top mt-5 pt-5">
        <div className="row">
          {/* Logo & Socials */}
          <div className="col mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              className="footer-logo mb-3"
              style={{ width: "60%" }}
            />
            <p className="small">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-primary fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-primary fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-primary fs-5">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-danger fs-5">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Account */}
          <div className="col">
            <h6 className="footer-title text-dark d-flex align-items-center gap-2">
              <FaUserCircle className="text-primary" /> Account
            </h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Open demat account</a></li>
              <li><a href="#">Minor demat account</a></li>
              <li><a href="#">NRI demat account</a></li>
              <li><a href="#">Commodity</a></li>
              <li><a href="#">Dematerialisation</a></li>
              <li><a href="#">Fund transfer</a></li>
              <li><a href="#">MTF</a></li>
              <li><a href="#">Referral program</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col">
            <h6 className="footer-title text-dark d-flex align-items-center gap-2">
              <FaLifeRing className="text-success" /> Support
            </h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Support portal</a></li>
              <li><a href="#">How to file a complaint?</a></li>
              <li><a href="#">Status of complaints</a></li>
              <li><a href="#">Bulletin</a></li>
              <li><a href="#">Circular</a></li>
              <li><a href="#">Z-Connect blog</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col">
            <h6 className="footer-title text-dark d-flex align-items-center gap-2">
              <FaBuilding className="text-warning" /> Company
            </h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#">Philosophy</a></li>
              <li><a href="#">Press & media</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Open source</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col">
            <h6 className="footer-title text-dark d-flex align-items-center gap-2">
              <FaLink className="text-info" /> Quick Links
            </h6>
            <ul className="footer-links list-unstyled">
              <li><a href="#">Upcoming IPOs</a></li>
              <li><a href="#">Brokerage charges</a></li>
              <li><a href="#">Market holidays</a></li>
              <li><a href="#">Economic calendar</a></li>
              <li><a href="#">Calculators</a></li>
              <li><a href="#">Markets</a></li>
              <li><a href="#">Sectors</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-5 footer-disclaimer small">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. Depository services through Zerodha Broking Ltd.
            – SEBI Registration no.: IN-DP-431-2019. Commodity Trading through
            Zerodha Commodities Pvt. Ltd. – SEBI Registration no.:
            INZ000038238.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            communication and speedy redressal of grievances.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile number and email ID with your stock brokers. Receive
            transaction information directly from exchanges on your
            mobile/email.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="text-center mt-4 border-top pt-3">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a className="low-link" href="#"><FaMoneyBillWave /> NSE</a>
            <a className="low-link" href="#"><FaMoneyBillWave /> BSE</a>
            <a className="low-link" href="#"><FaMoneyBillWave /> MCX</a>
            <a className="low-link" href="#">Terms & conditions</a>
            <a className="low-link" href="#">Policies & procedures</a>
            <a className="low-link" href="#">Privacy policy</a>
            <a className="low-link" href="#">Disclosure</a>
            <a className="low-link" href="#">Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
