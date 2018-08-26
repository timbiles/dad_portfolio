import React from 'react';
import Fade from 'react-reveal/Fade';

import './Home.css';

const IndexPage = () => (
  <div>
    <div className="home_img" />
    <header className="home_container">
      <h1>Preach the Word</h1>
    </header>
    <footer className="home_sub">
    <div className='home_sub_2'>

      <div className="contact_holder">
        <Fade top>
          <h3>Connect with Dr. Biles</h3>
          <p>817-923-1921 x 6700</p>
          <div className="cont_email">
            <a className="contact_email" href={'mailto:dbiles@swbts.com'}>
              <p>dbiles@swbts.com</p>
            </a>
          </div>
          <div className="cont_email">
            <a
              className="contact_email"
              href="https://swbts.edu/academics/faculty/theology/deron-biles/"
            >
              <p>Faculty Page</p>
            </a>
          </div>
        </Fade>
      </div>

      <div className="contact_holder ch1">
        <Fade top>
          <h3>Follow me on...</h3>
          <div className="social_media">
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
        </Fade>
      </div>
    </div>
      <div className="upcoming_events">
        <h3>Upcoming Events</h3>
        <Fade top cascade>
          <div>
            <p> September 6</p>
            <p>Preaching - SWBTS Chapel</p>
            <p> October 8</p>
            <p>
              Preaching the book of Job Session at Text Driven Preaching
              Workshop - SWBTS
            </p>
            <p> November 5 - 9</p>
            <p>Seminar on Preaching the Old Testament Prophets - Rio, Brazil</p>
            <p> January 7 - 11</p>

            <p>Seminar on Pastoral Ministry - Trinidad and Tobago</p>
            <p>March 4</p>

            <p>
              Pastoral Ministry Session & Preaching Session at Text Driven
              Preaching Workshop - SWBTS
            </p>
            <p> May 14 - 16</p>

            <p>Preaching Conference - Abuja, Nigeria</p>
          </div>
        </Fade>
      </div>
    </footer>
  </div>
);

export default IndexPage;
