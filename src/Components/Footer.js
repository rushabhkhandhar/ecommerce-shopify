import React from 'react';
import './style.css';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoPinterest, logoLinkedin, location, call, mail, chevronForwardOutline } from 'ionicons/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="160" height="50" alt="Footcap logo" />
            </a>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoPinterest} />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>
              <li>
                <address className="footer-link">
                  <IonIcon icon={location}></IonIcon>
                  <span className="footer-link-text">2751 S Parker Rd, Aurora, CO 80014, United States</span>
                </address>
              </li>
              <li>
                <a href="tel:+557343673257" className="footer-link">
                  <IonIcon icon={call}></IonIcon>
                  <span className="footer-link-text">+557343673257</span>
                </a>
              </li>
              <li>
                <a href="mailto:footcap@help.com" className="footer-link">
                  <IonIcon icon={mail}></IonIcon>
                  <span className="footer-link-text">footcap@help.com</span>
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">My Account</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                  <span className="footer-link-text">My Account</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                  <span className="footer-link-text">View Cart</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                  <span className="footer-link-text">Wishlist</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                  <span className="footer-link-text">Compare</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <IonIcon icon={chevronForwardOutline}></IonIcon>
                  <span className="footer-link-text">New Products</span>
                </a>
              </li>
            </ul>
            <div class="footer-list">

<p class="footer-list-title">Opening Time</p>

<table class="footer-table">
  <tbody>

    <tr class="table-row">
      <th class="table-head" scope="row">Mon - Tue:</th>

      <td class="table-data">8AM - 10PM</td>
    </tr>

    <tr class="table-row">
      <th class="table-head" scope="row">Wed:</th>

      <td class="table-data">8AM - 7PM</td>
    </tr>

    <tr class="table-row">
      <th class="table-head" scope="row">Fri:</th>

      <td class="table-data">7AM - 12PM</td>
    </tr>

    <tr class="table-row">
      <th class="table-head" scope="row">Sat:</th>

      <td class="table-data">9AM - 8PM</td>
    </tr>

    <tr class="table-row">
      <th class="table-head" scope="row">Sun:</th>

      <td class="table-data">Closed</td>
    </tr>

  </tbody>
</table>

</div>
    
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Newsletter</p>
              </li>
              <li>
                <p className="newsletter-text">
                  Authoritatively morph 24/7 potentialities with error-free partnerships.
                </p>
              </li>
              <li>
                <form action="" className="newsletter-form">
                  <input type="email" name="email" required placeholder="Email Address" className="newsletter-input" />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
