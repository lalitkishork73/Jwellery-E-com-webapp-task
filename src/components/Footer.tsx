// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {GrClose} from 'react-icons/gr'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footerInner'>
        <div className="footer-links">
          <ul>

            <li> <NavLink to="/aboutus">About Us</NavLink></li>
            <li><NavLink to="/contactus">Contact Us</NavLink></li>
            <li><NavLink to="/privacypolicy">Privacy Policy</NavLink></li>
          </ul>
        </div>
        <div className="footer-social">
          <a target="_blank" href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a target="_blank" href="https://twitter.com">
            <FaTwitter />
          </a>
          <a target="_blank" href="https://www.instagram.com">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div>
        <p style={{ color: "white" }}>
          Copyright © 2023 Dimonica Jwells. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
