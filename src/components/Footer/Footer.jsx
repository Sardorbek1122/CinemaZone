import React from 'react';
import "../../styles/App.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__wrapper'>
        <div className='footer__heading'>
          Question? Call <a href="tel:+123456789">+123456789</a>
        </div>
        <div className='footer__nav'>
          <div className='footer__nav-wrapper'>
            <a className='footer__sign-in' href="/">sign in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
