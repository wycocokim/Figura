import React from "react";
import "./About.css";
import heroAbout from "../images/hero-about.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-hero">
          <div className="about-grid">
            <div>
              <img src={heroAbout} alt="hero-img" />
            </div>
            <div className="about-grid-col1">
              <h1>About Us</h1>
              <p className="about-p">
                We make dresses to suit any woman's individual sense of style.
              </p>
              <p className="about-p bot-1">
                Every woman aspires to look and feel confident, and Figura's
                elegant and stylish dresses help the brand achieve just that. As
                the creative force behind the much-loved couture atelier Figura
                Haute Couture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
