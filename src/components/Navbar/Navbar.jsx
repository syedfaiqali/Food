import React, { useState } from 'react';
import { GiHamburgerMenu, GiHidden } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import Login from '../Login/Login';
// import Login from './Login/login';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false)

  const [login, setlogin] = useState(false)
  const openModal = () => {
    setlogin(true)
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  }
  const closeModal = () => {
    setlogin(false)
    document.body.style.overflowY = "visible";
    document.body.style.overflowX = "hidden";
  }
  const bookTable = () => {
    alert("Register Yourself First")
  };
  return (
    <>
      {login && <Login isOpen={login} closeModal={closeModal} />}
      <nav className="app__navbar">
        <div><img src={images.sfaj} alt="app logo" /></div>
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#home">Home</a></li>
          <li className="p__opensans"><a href="#about">About</a></li>
          <li className="p__opensans"><a href="#menu">Menu</a></li>
          <li className="p__opensans"><a href="#ourchefs">Our Chef's</a></li>
          <li className="p__opensans"><a href="#contactus">Contact Us</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='p__opensans' onClick={openModal}>Log In / Register</a>
          <a href="/" className='p__opensans' onClick={bookTable}>Book Table</a>
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setTogleMenu(true)} />

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={() => setTogleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#home">Home</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#about">About</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#menu">Menu</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#ourchefs">Our Chef's</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#contactus">Contact Us</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  )
};

export default Navbar;
