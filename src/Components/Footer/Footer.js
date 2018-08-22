import React from 'react'

import Olive from './olive-branch.svg';
import './Footer.css'

const Footer = () => (
  <div className="footer">
    <div className="footer_container">
      <p>© 2018 Olive Branch Designs</p>
      <img
        className="olive"
        src={Olive}
        alt=""
      />
    </div>
  </div>
)

export default Footer
