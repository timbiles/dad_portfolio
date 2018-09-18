import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hamburger extends Component {

  render() {
    const { menu } = this.props;
    return (
      <div className="hamburger">
        <div className="hamburger_icon" onClick={this.props.toggleClick}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        {menu &&
        (typeof window !== `undefined` && window.location.pathname === '/') ? (
          <div className="dropdown">
            <Link className="header_link" to="/" onClick={this.props.toggleOff}>
              Home
            </Link>

            <Link
              className="header_link"
              to="/about"
              onClick={this.props.toggleOff}
            >
              About
            </Link>

            <Link
              className="header_link"
              to="/library"
              onClick={this.props.toggleOff}
            >
              Library
            </Link>

            <Link
              className="header_link"
              to="/article"
              onClick={this.props.toggleOff}
            >
              Articles
            </Link>

            <Link
              className="header_link"
              to="/contact"
              onClick={this.props.toggleOff}
            >
              Speaker Request
            </Link>
          </div>
        ) : (
          menu && (
            <div className="dropdown">
              <Link
                className="header_link"
                style={{ color: '#1B1A1B' }}
                to="/"
                onClick={this.props.toggleOff}
              >
                Home
              </Link>

              <Link
                className="header_link"
                style={{ color: '#1B1A1B' }}
                to="/about"
                onClick={this.props.toggleOff}
              >
                About
              </Link>

              <Link
                className="header_link"
                style={{ color: '#1B1A1B' }}
                to="/library"
                onClick={this.props.toggleOff}
              >
                Library
              </Link>

              <Link
                className="header_link"
                style={{ color: '#1B1A1B' }}
                to="/article"
                onClick={this.props.toggleOff}
              >
                Articles
              </Link>

              <Link
                className="header_link"
                style={{ color: '#1B1A1B' }}
                to="/contact"
                onClick={this.props.toggleOff}
              >
                Speaker Request
              </Link>
            </div>
          )
        )}
      </div>
    );
  }
}

export default Hamburger;
