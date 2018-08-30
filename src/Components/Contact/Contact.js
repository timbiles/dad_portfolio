import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';
import Verse from '../VerseGenerator/VerseGenerator';

const SpeakerRequest = () => (
  <div className="contact">
    <div className="contact_container">
      <div className="bio_name_sub contact_1">
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>

        <h1 className="speaker_name">Speaker Request Form</h1>
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
      </div>
      
      <div className="contact_sub request_form">
        <h3>
          If you would like Dr. Biles to speak at an event, please follow the
          link to fill out the form!
        </h3>
        <Link className="contact_form" to="/form">
          Speaker Request Form
        </Link>
      </div>
      <Verse/>
    </div>
  </div>
);

export default SpeakerRequest;
