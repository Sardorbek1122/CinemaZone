import React from "react";
import "../../styles/App.scss";

class AboutSections extends React.Component {
  render() {
    return (
      <div>
        <section className="about">
          <div className="about__top-border"></div>
          <div className="about__enjoy">
            <div className="about__enjoy-content">
              <h2 className="about__enjoy-title">Enjoy on your TV.</h2>
              <p className="about__enjoy-text">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="about__enjoy-pic">
              <div className="about__enjoy-img"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutSections;