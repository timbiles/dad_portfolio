import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';

const Contact = () => (
  <div className="contact">
    <div className="contact_container">
      <div className="bio_name_sub">
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>

        <h1 className="about_name">Contact</h1>
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
      </div>
      <div className="contact_sub">
        <h3>
          If you would like Dr. Biles to speak at an event, please follow the
          link to fill out the following form!
        </h3>
        <Link className="contact_form" to="/form">
          Form
        </Link>
      </div>

      <div className="contact_sub">
        <h3>Follow Me</h3>
        <div>
          <a href="https://twitter.com/deronjbiles?lang=en" target="blank">
            <img
              className="twitter social_icon"
              src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"
              alt="Twitter logo"
            />
          </a>
          <a
            href="https://www.facebook.com/deron.biles?fb_dtsg_ag=Ady9PVQTaXhtskpq54ugszp0ak9UJLM3eu8gM0WpS2nrqw%3AAdx_PsC8HP9JHqAgJx7Q2qclW_TwACIf3P98JwT1vGjRVQ"
            target="blank"
          >
            <img
              className="facebook social_icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
              alt="Facebook logo"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
