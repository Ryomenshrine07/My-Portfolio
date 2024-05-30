import React from 'react'
import {Link, useLocation } from 'react-router-dom';

function Navbar() {

  function handleToggle(event)
  {
    let nav = document.querySelector('nav');
    nav.classList.toggle('close');
  }
  function handleSearch(event)
  {
    let nav = document.querySelector('nav');
    nav.classList.remove('close');
  }
  function handleToggleSwitch(event)
  {
    let body = document.querySelector('body');
    body.classList.toggle('dark');
  }

  return (
    <nav  className="sidebar close">
      <header>
        <div className="image-text">
          <span className="image">
          <img src={require('E:/Web Developement/my_portfolio/src/Images/Portfolio_Image.png')}/>
          </span>
          <div className="text logo-text">
            <span className="name">Vinayak Upadhyay</span>
            <span className="profession">MERN-stack Developer</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle' onClick={handleToggle}></i>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box" onClick={handleSearch}>
            <i className='bx bx-search icon'></i>
            <input type="text" placeholder="Search..." />
          </li>
          <ul className="menu-links">
            <li className="nav-link">
              <Link to={'/'}>
                <i className='bx bx-home-alt icon' ></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={'/achievements'}>
                <i className='bx bx-bar-chart-alt-2 icon' ></i>
                <span className="text nav-text">Achievements</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={'/aboutme'}>
                <i className='bx bxl-gitlab icon'></i>
                <span className="text nav-text">About Me</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={'/dailyupdates'}>
                <i className='bx bxl-magento icon' ></i>
                <span className="text nav-text">Daily Upadtes</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link to={'/contact'}>
                <i className='bx bx-message-alt icon' ></i>
                <span className="text nav-text">Contact Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export { Navbar }