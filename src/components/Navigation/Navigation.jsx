import React from "react";
import "../../styles/App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar">
          <a href="/" class="navbar__logo">CinemaZone</a>
          <ul class="navbar__menu">
            <div className="navbar__lang">
            <select name="language" id="lang" className="navbar__language">
              <option value="eng">English</option>
              <option value="rus">Russian</option>
            </select>
            </div>
            <a href="/" className="navbar__singin">Sign in</a>
          </ul>
        </nav>
        <header className="header">
          <div className="header__wrapper">
            <div className="header__content">
              <h1 className="header__hero-title">Unlimited movies, TV shows, and more.</h1>
              <p className="header__text-subtitle">Watch anywhere. Cancel anytime.</p>
              <div>
                <form method="post" className="header__form">
                  <h3 className="header__form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                  <div>
                    <div>
                      <input type="email" placeholder="Email address" />
                      <button>Get Started</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navigation;