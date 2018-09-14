import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './Contact.css';
import Verse from '../VerseGenerator/VerseGenerator';
import dad from './dad1.jpg';

const SpeakerRequest = () => (
  <div className="contact">
    <div className="contact_container">
      <div className="bio_name_sub contact_1">
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
        <Fade cascade>
          <h1 className="speaker_name">Speaker Request Form</h1>
        </Fade>
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
      </div>

      <div className="contact_sub request_form">
        <h3>
          If you would like Dr. Biles to speak at an event, please follow the
          link below!
        </h3>
        <Link className="contact_form" to="/form">
          Speaker Request Form
        </Link>
      </div>
      <Verse />
    </div>
    <div className="ci_holder">
        <img className="contact_img" src={dad} alt="Deron conference" />
      </div>
  </div>
);

export default SpeakerRequest;
