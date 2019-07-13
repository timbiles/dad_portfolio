import React from 'react';

import Olive from './olive-branch.svg';
import './Footer.css';

const Footer = () => (
  <div>
    {typeof window !== `undefined` && window.location.pathname === '/' ? (
      <div 
        className="footer"
        style={{ backgroundColor: 'transparent'}}
      >
        <div className="footer_container">
          <p
            style={{color: '#000'}}
          >© {new Date().getFullYear()} Olive Branch Designs</p>
          <img className="olive" src="https://image.flaticon.com/icons/svg/85/85254.svg" alt="Olive Branch" />
        </div>
      </div>
    ) : (
      <div className="footer">
        <div className="footer_container">
          <p>© {new Date().getFullYear()} Olive Branch Designs</p>
          <img className="olive" src={Olive} alt="Olive Branch" />
        </div>
      </div>
    )}
  </div>
);

export default Footer;
