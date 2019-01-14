import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../Hamburger/Hamburger';
import './Header.css';

class Header extends Component {
  state = {
    menu: false
  };

  toggleClick = e => {
    const {menu} = this.state
    this.setState({menu: !menu});
  };

  toggleOff = e => {
    this.setState({ menu: false });
  };

  handleBlur = () => {
    this.setState({ menu: false });
  };

  render() {
    return (
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
            <Hamburger
              toggleClick={e => this.toggleClick(e)}
              toggleOff={e => this.toggleOff(e)}
              menu={this.state.menu}
              onBlur={this.handBlur}
            />
            <div className="header_right">
              <Link className="header_link hl1" to="/">
                Home
              </Link>

              <Link className="header_link hl1" to="/about">
                About
              </Link>

              <Link className="header_link hl1" to="/library">
                Library
              </Link>

              <Link className="header_link hl1" to="/article">
                Articles
              </Link>

              <Link className="header_link hl1" to="/contact">
                Speaker Request
              </Link>
            </div>
          </div>
        ) : (
          <div
            className="header_container"
            style={{
              backgroundColor: '#232F3E',
              position: 'fixed',
              width: '100%'
            }}
          >
            <div className="header_main">
              <Link className="header_link" to="/">
                <h1>Deron Biles</h1>
              </Link>
            </div>
            <Hamburger
              toggleClick={e => this.toggleClick(e)}
              toggleOff={e => this.toggleOff(e)}
              menu={this.state.menu}
              onBlur={this.handBlur}
            />

            <div className="header_right">
              <Link className="header_link hl1" to="/">
                Home
              </Link>

              <Link className="header_link hl1" to="/about">
                About
              </Link>

              <Link className="header_link hl1" to="/library">
                Library
              </Link>

              <Link className="header_link hl1" to="/article">
                Articles
              </Link>

              <Link className="header_link hl1" to="/contact">
                Speaker Request
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
