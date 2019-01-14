import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';
import Verse from '../VerseGenerator/VerseGenerator';
import dad2 from './dad-seminary.jpg';

const SpeakerRequest = () => (
  <div className="contact">
    <div className="contact_container">
      <div className="form_pic_btm">
        <div className="contact_sub request_form">

          <div className="fader">
            <h1 className="speaker_name">Speaker Request Form</h1>
          </div>

          <h3>
            If you would like Dr. Biles to speak at an event, please follow the
            link below!
          </h3>
          <Link className="contact_form" to="/form">
            <div className="btn_box">Speaker Request Form</div>
          </Link>
        </div>

        <div className="ci_holder">
          <img className="contact_img" src={dad2} alt="Deron conference" />
        </div>
      </div>
      <Verse />
    </div>
  </div>
);

export default SpeakerRequest;
