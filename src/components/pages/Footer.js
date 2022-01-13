import React from "react";
import "./Footer.css";
import location from "../images/location.svg";
import logoWhite from "../images/Logo-white.svg";
import email from "../images/email.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <div className="footer-grid">
          <div className="footer-col1">
            <img className="footer-logo" src={logoWhite} alt="logo" />
            <a
              href="https://www.google.com/maps/place/Figura+Haute+Couture/@14.6150701,121.0555887,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b7e9f581c507:0xd15151f21e5930a9!8m2!3d14.6150649!4d121.0577774"
              className="footer-a"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-container">
                <div className="icon-wrapper">
                  <img className="icon" src={location} alt="location" />
                </div>
                <h3>56 10th Ave, Cubao, Quezon City, 1109 Metro Manila</h3>
              </div>
            </a>
            <a className="footer-a" href="mailto: figura@gmail.com">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <img className="icon" src={email} alt="email" />
                </div>
                <h3>Figura@gmail.com</h3>
              </div>
            </a>
          </div>

          <div className="footer-col1">
            <h3 className="footer-h3">About us</h3>
            <p className="footer-p">
              We make dresses to suit any woman's individual sense of style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
