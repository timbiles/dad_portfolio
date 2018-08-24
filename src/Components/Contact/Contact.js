import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';
import Verse from '../VerseGenerator/VerseGenerator';

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
      <div className="contact_holder">
        <p>Office phone: 817-923-1921 x 6700</p>
        <div className="cont_email">
          <a className="contact_email" href={'mailto:dbiles@swbts.com'}>
            <p>dbiles@swbts.com</p>
          </a>
        </div>
        <div className="cont_email">
          <a className="contact_email" href='https://swbts.edu/academics/faculty/theology/deron-biles/'>
            <p>Faculty Page</p>
          </a>
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

          <a
            href="https://scholar.google.com/citations?user=D_syC7YAAAAJ&hl=en"
            target="blank"
          >
            <img
              className="social_icon"
              src="http://s3.amazonaws.com/libapps/customers/1627/images/google_scholar.PNG"
              alt="Google Scholar logo"
            />
          </a>
        </div>
      </div>
      <Verse />
    </div>
  </div>
);

export default Contact;
