import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hamburger extends Component {
  state = {
    links: [
      {name:'Home', to: '/'}, 
      {name:'About', to: '/about'}, 
      {name:'Library', to: '/library'}, 
      {name:'Articles', to: '/article'}, 
      {name:'Speaker Request', to: '/contact'}
    ]
  };

  render() {
    const { menu } = this.props;

    const map = this.state.links.map((e, i) => {
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
      <div className="hamburger">
        <div className="hamburger_icon" onClick={this.props.toggleClick}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        {menu &&
        (typeof window !== `undefined` && window.location.pathname === '/') ? (
          <div className="dropdown">
          {map}
            
          </div>
        ) : (
          menu && (
            <div className="dropdown drop2">
              {map}
            </div>
          )
        )}
      </div>
    );
  }
}

export default Hamburger;
