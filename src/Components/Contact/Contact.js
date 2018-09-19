import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './Contact.css';
import Verse from '../VerseGenerator/VerseGenerator';
import dad from './dad1.jpg';
import dad2 from './dad-seminary.jpg';

const SpeakerRequest = () => (
  <div className="contact">
    <div className="contact_container">
      {/* <div className="bio_name_sub contact_1">
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
      </div> */}
      <div className="form_pic_btm">
        <div className="contact_sub request_form">
        <Fade cascade>
          <h1 className="speaker_name">Speaker Request Form</h1>
        </Fade>
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
