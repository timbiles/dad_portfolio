import React from 'react'
import {Link} from 'react-router-dom';

export default () => (
  <div className="hamburger">
    <div className="hamburger_icon">
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>
    {typeof window !== `undefined` && window.location.pathname === '/' ? (
      <div className="dropdown">
        <Link className="header_link" to="/"
        >
          Home
        </Link>

        <Link className="header_link" to="/about">
          About
        </Link>

        <Link className="header_link" to="/library">
          Library
        </Link>

        <Link className="header_link" to="/contact">
          Speaker Request
        </Link>
      </div>
    ) : (
      <div className="dropdown">
        <Link className="header_link" style={{ color: '#1B1A1B' }} to="/">
          Home
        </Link>

        <Link className="header_link" style={{ color: '#1B1A1B' }} to="/about">
          About
        </Link>

        <Link
          className="header_link"
          style={{ color: '#1B1A1B' }}
          to="/library"
        >
          Library
        </Link>

        <Link
          className="header_link"
          style={{ color: '#1B1A1B' }}
          to="/contact"
        >
          Speaker Request
        </Link>
      </div>
    )}
  </div>
)
