import React from "react";
import heroImage from "../images/hero-img.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import "./Home.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <section>
      <div className="home-container">
        <div className="home-hero">
          <div className="grid">
            <div className="grid-col1">
              <h1>Figura Haute Couture</h1>
              <p>
                Every woman aspires to look and feel confident, and Figura's
                elegant and stylish dresses help the brand achieve just that. As
                the creative force behind the much-loved couture atelier Figura
                Haute Couture.
              </p>
              <a href="/appointment">
                <button>Contact us</button>
              </a>
            </div>
            <div>
              <img src={heroImage} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-container">
        <h2>Our Products</h2>

        <div className="home-grid2">
          <div className="grid-2-col">
            <img src={img1} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img2} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img3} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img4} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img5} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img6} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img7} alt="hero-img" />
          </div>
          <div className="grid-2-col">
            <img src={img8} alt="hero-img" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
