import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Ajowad's Projects</h1>
          <p>
            Welcome to my Projects Section as I start of my React Journey. Click
            on the Project to view the live version. Built using Contentful CMS.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and Browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
