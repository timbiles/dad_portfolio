import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../Hamburger/Hamburger';
import './Header.scss';

class Header extends Component {
  state = {
    links: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Library', to: '/library' },
      { name: 'Articles', to: '/article' },
      { name: 'Speaker Request', to: '/contact' }
    ]
  };

  render() {
    const map = this.state.links.map((e, i) => {
      return (
        <Link key={i} className="header_link hl1" to={e.to}>
          {e.name}
        </Link>
      );
    });

    return (
      <>
        <div
          className="header_container"
          style={
            typeof window !== `undefined` && window.location.pathname === '/'
              ? { backgroundColor: 'transparent', position: 'relative' }
              : { backgroundColor: '#232F3E', position: 'fixed', width: '100%' }
          }
        >
          <div className="header_main">
            <Link className="header_link" to="/">
              <h1>Deron Biles</h1>
            </Link>
          </div>
          <Hamburger
            menu={this.props.menu}
            links={this.state.links}
            navClass={this.props.navClass}
          />
          <div className="header_right">{map}</div>
        </div>
      </>
    );
  }
}

export default Header;
