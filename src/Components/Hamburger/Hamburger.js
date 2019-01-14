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
      <div className="hamburger" id='hamburger'>
        <div
          className="hamburger_icon"
          id="h1"
          onClick={this.props.toggleClick}
        >
          <div className="burger burger1" id="h2" />
          <div className="burger burger2" id="h3" />
          <div className="burger burger3" id="h4" />
        </div>

        {menu &&
        (typeof window !== `undefined` && window.location.pathname === '/') ? (
          <div className={this.props.navClass ? 'dropdown exit' : 'dropdown'}>
            {map}
          </div>
        ) : (
          menu && (
            <div
              className={this.props.navClass ? 'dropdown drop2 exit' : 'dropdown drop2'}
            >
              {map}
            </div>
          )
        )}
      </div>
    );
  }
}

export default Hamburger;
