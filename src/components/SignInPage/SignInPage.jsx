import React, { Component } from "react";
import "../../styles/App.scss";
import Footer from "../Footer";

class SingInPage extends React.Component {
  render() {
    return (
      <div className="signing-page">
        <div className="signing-page__wrapper">
          <div className="signing-page__header">
            <a href="/" class="navbar__logo">
              CinemaZone
            </a>
            <select name="language" id="lang" className="navbar__language">
              <option value="eng">English</option>
              <option value="rus">Russian</option>
            </select>
          </div>
          <div className="signing-page__form-wrapper">
            <div className="signing-page__form-body">
              <h2 className="signing-page__form-body-header">Sign In</h2>
              <form action="/" method="get" className="signing-page__form">
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SingInPage;
