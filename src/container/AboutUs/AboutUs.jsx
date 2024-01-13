import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';
const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.sfaj} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We have too much delicious food that will blow up your mind</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about__knife" />
      </div>

      <div className="app__aboutus-content_histroy">
        <h1 className="headtext__cormorant">Our Histroy</h1>
        <img src={images.spoon} alt="histroy_spoon" className="spoon__img" />
        <p className="p__opensans">We are in the market since 1990 if you wanted to know more about us click the button bellow</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
