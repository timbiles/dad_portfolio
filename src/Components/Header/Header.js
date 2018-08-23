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






const UPDATE_ORGANIZATION_NAME = 'UPDATE_ORGANIZATION_NAME'
const UPDATE_CONTACT_NAME = 'UPDATE_CONTACT_NAME'
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME'
const UPDATE_EVENT_DATE = 'UPDATE_EVENT_DATE'
const UPDATE_EVENT_TIME = 'UPDATE_EVENT_TIME'
const UPDATE_SPEAKER_REQUEST = 'UPDATE_SPEAKER_REQUEST'
const UPDATE_ARRIVAL_TIME = 'UPDATE_ARRIVAL_TIME'
const UPDATE_EVENT_LOCATION = 'UPDATE_EVENT_LOCATION'
const UPDATE_EVENT_DESCRIPTION = 'UPDATE_EVENT_DESCRIPTION'
const UPDATE_EVENT_TOPIC = 'UPDATE_EVENT_TOPIC'
const UPDATE_PRESENTATION_LENGTH = 'UPDATE_PRESENTATION_LENGTH'
const UPDATE_PRESENTATION_TIME = 'UPDATE_PRESENTATION_TIME'
const UPDATE_PRESENTATION_COMMENTS = 'UPDATE_PRESENTATION_COMMENTS'
const UPDATE_AIRPORT = 'UPDATE_AIRPORT'
const UPDATE_AIRPORT_TRANSPORTATION = 'UPDATE_AIRPORT_TRANSPORTATION'
const UPDATE_LODGING = 'UPDATE_LODGING'
const UPDATE_LODGING_LOCATION = 'UPDATE_LODGING_LOCATION'
const UPDATE_TRAVEL_EXPENSES = 'UPDATE_TRAVEL_EXPENSES'
const UPDATE_REIMBURSEMENT_RECEIPTS = 'UPDATE_REIMBURSEMENT_RECEIPTS'
const UPDATE_BIO = 'UPDATE_BIO'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_W2 = 'UPDATE_W2'