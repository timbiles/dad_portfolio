import React from 'react'
import {Link} from 'react-router-dom';

import Hamburger from '../Hamburger/Hamburger';
import './Header.css';

const Header = ({ siteTitle }) => (
  <div>
    {typeof window !== `undefined` && window.location.pathname === '/' ? (
      <div
        className="header_container"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="header_main">
          <Link className="header_link" to="/">
            <h1>Deron Biles</h1>
          </Link>
        </div>
        <Hamburger />
        <div className="header_right">
          <Link className="header_link" to="/">
            Home
          </Link>

          <Link className="header_link" to="/about">
            About
          </Link>

          <Link className="header_link" to="/library">
            Library
          </Link>

          <Link className="header_link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    ) : (
      <div
        className="header_container"
        style={{
          backgroundColor: '#1B1A1B',
          position: 'fixed',
          width: '100%',
        }}
      >
        <div className="header_main">
          <Link className="header_link" to="/">
            <h1>Deron Biles</h1>
          </Link>
        </div>
        <Hamburger />

        <div className="header_right">
          <Link className="header_link" to="/">
            Home
          </Link>

          <Link className="header_link" to="/about">
            About
          </Link>

          <Link className="header_link" to="/library">
            Library
          </Link>

          <Link className="header_link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    )}
  </div>
)

export default Header
