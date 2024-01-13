import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer section__padding" id="contactus">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">House No 1829,Sector L1, North Karachi, Karachi</p>
        <p className="p__opensans">+92-307-2882293</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.sfaj} alt="footer_logo" />
        <p className="p__opensans faiqali">The best to find</p>
        <img src={images.spoon} alt="spoon" className="faiqali spoon__img" style={{ marginTop:"15px" }}/>
        <div className="app__footer-links_icons faiqali">
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className="app__footer-links_works">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: 11:00 am -- 01:00 am</p>
        <p className="p__opensans">Sat - Sun: 11:00 am -- 03:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 SFAJ. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
