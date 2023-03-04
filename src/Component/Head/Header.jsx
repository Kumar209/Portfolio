import React, { useState } from 'react';
import './Header.css';
// import logo from '../pic/logo.png';

const Header = () => {
  //When scroll header at top
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  })

  //toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <React.Fragment>
      <header className='header'>

        <div className='container d_flex'>
          <div className='logo'>
            <a href="#"><span>K</span>umar</a>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Toggle Menu Button */}
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
            </button>
          </div>
        </div>
      </header>
    </React.Fragment >
  )
}

export default Header;