import React from "react";
import "../../styles/App.scss";
import FAQSection from "../FAQSection";
import Footer from "../Footer";

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
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="about__enjoy-pic">
                <video className="about__enjoy-vidcon" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
            </div>
          </div>
          <div className="about__top-border"></div>
          <div className="about__download">
            <div className="about__download-pic">
              <div className="about__download-img">
              </div>
              <div className="about__download-motion">
                <div className="about__download-m-pic">
                </div>
                <div className="about__download-m-text">
                  <span>Stranger Things</span>
                  <br />
                  Downloading...
                </div>
                <div className="about__download-m-animation"></div>

              </div>
            </div>
            <div className="about__download-content">
              <h2 className="about__download-title">
                Download your shows to watch offline.
              </h2>
              <p className="about__download-text">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
          <div className="about__top-border"></div>
          <div className="about__enjoy">
            <div className="about__enjoy-content">
              <h2 className="about__enjoy-title">
                Watch everywhere.
              </h2>
              <p className="about__enjoy-text">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
              </p>
            </div>
            <div className="about__enjoy-pic">
              <div className="about__enjoy2-img"></div>
                <video className="about__enjoy2-vidcon" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  />
                </video>
            </div>
          </div>
          <div className="about__top-border"></div>
          <div className="about__download">
            <div className="about__kids-pic">
            </div>
            <div className="about__download-content">
              <h2 className="about__download-title">
                Download your shows to watch offline.
              </h2>
              <p className="about__download-text">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
          <div className="about__top-border"></div>
        </section>
        <FAQSection/>
        <div className="about__top-border"></div>
        <Footer/>
      </div>
    );
  }
}

export default AboutSections;
