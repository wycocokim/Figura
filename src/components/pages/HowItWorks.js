import React from "react";
import "./HowItWorks.css";
import appointment from "../images/appointment.jpg";
import designer from "../images/designer.jpg";
import style from "../images/style.jpg";
import tailor from "../images/tailor.jpg";
import fitting from "../images/fitting.jpg";
import pickup from "../images/pickup.jpg";
import Footer from "./Footer";

const HowItWorks = () => {
  return (
    <section>
      <div className="howitworks-container">
        <h1 className="howitworks-h1">How it works</h1>
        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div>
              <img src={appointment} alt="hero-img" />
            </div>
            <div className="howitworks-grid-col1 row-1">
              <h1>1) Book an appointment</h1>
              <p className="howitworks-p">
                Navigate to appointment page and book an appointment, then wait
                for a text message from us to confirm that your booking has been
                set.
              </p>
            </div>
          </div>
        </div>

        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div className="howitworks-grid-col2">
              <h1>2) Consult with a designer</h1>
              <p className="howitworks-p">
                Upon appointment date you have to consult with our designer to
                Create a design that you want and style that you want.
              </p>
            </div>
            <div>
              <img src={designer} alt="hero-img" />
            </div>
          </div>
        </div>

        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div>
              <img src={style} alt="hero-img" />
            </div>
            <div className="howitworks-grid-col1 row-1">
              <h1>3) Style your garments</h1>
              <p className="howitworks-p">
                The designer will get your measurements and you will choose your
                preffered material and color to use to make your dress.
              </p>
            </div>
          </div>
        </div>

        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div className="howitworks-grid-col2">
              <h1>4) Your dress is tailored</h1>
              <p className="howitworks-p">
                Your dress will be tailored perfectly with the help of our
                skilled and passionate tailor.
              </p>
            </div>
            <div>
              <img src={tailor} alt="hero-img" />
            </div>
          </div>
        </div>

        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div>
              <img src={fitting} alt="hero-img" />
            </div>
            <div className="howitworks-grid-col1 row-1">
              <h1>5) Dress Fitting</h1>
              <p className="howitworks-p">
                You will try to fit your dress and see if we need some
                adjustment, so you can wear the dress perfectly
              </p>
            </div>
          </div>
        </div>

        <div className="howitworks-hero">
          <div className="howitworks-grid">
            <div className="howitworks-grid-col2">
              <h1>6) Pick up the finished product</h1>
              <p className="howitworks-p">
                When the dress fitting is done, you can pickup and bring home
                your beautiful dress
              </p>
            </div>
            <div>
              <img src={pickup} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default HowItWorks;
