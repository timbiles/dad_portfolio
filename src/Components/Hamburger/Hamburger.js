import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hamburger extends Component {
  render() {
    const { menu, links } = this.props;

    const map = links.map((e, i) => {
      return (
        <Link
          key={i}
          className="header_link"
          to={e.to}
          onClick={this.props.toggleOff}
        >
          {e.name}
        </Link>
      );
    });

    return (
      <div className="hamburger" id="hamburger">
        <div
          className="hamburger_icon"
          id="h1"
          onClick={this.props.toggleClick}
        >
          <div className="burger burger1" id="h2" />
          <div className="burger burger2" id="h3" />
          <div className="burger burger3" id="h4" />
        </div>

        {menu && (
          <div
            style={
              typeof window !== `undefined` && window.location.pathname === '/'
                ? { background: '#1b1a1b' }
                : { background: '#232f3e' }
            }
            className={this.props.navClass ? 'dropdown exit' : 'dropdown'}
          >
            <div>{map}</div>
            <img
              src="https://res.cloudinary.com/dwvrok1le/image/upload/v1547440176/open-magazine.png"
              alt="Book"
            />
          </div>
        )}
      </div>
    );
  }
}

export default Hamburger;
