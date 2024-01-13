import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="findus">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">We are in your heart just contact us from the bottom of your heart</p>
        <p className="p__cormorant" style={{ color:"#dcca87", margin:"2rem 0" }}>Opening hours</p>
        <p className="p__opensans">Mon - Fri: 11:00 am -- 1am</p>
        <p className="p__opensans">Sat - Sun: 11:00 am -- 4am</p>
      </div>
      <button className="custom__button " style={{ marginTop: "2rem" }} type="button" >Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
