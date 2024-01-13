import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Be good to the humanity and help the mankind</p>
      <button className="custom__button" type="button">Explore Menu</button>
    </div>
    <div className="app__wrapper-img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
