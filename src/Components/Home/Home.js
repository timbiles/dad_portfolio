import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Calendar from '../Calendar/Calendar';
import ArticleList from '../Article/ArticleList';

const IndexPage = () => (
  <div>
    <div className="home_img" />
    <header className="home_container">
      <h1>Preach the Word</h1>
    </header>
    <div className="home_sub">
      <div className="home_sub12">
        <div className="home_article">
          <h3>Latest Posts by Dr. Biles</h3>
          <div className='scroll'>

            <ArticleList />
            <Link className="article_link" to="/article">
              <p>See more...</p>
            </Link>
          </div>
        </div>
        <div className="home_sub_2">
          <div className="contact_holder">
            <div className='scroll'>

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
            </div>
          </div>

          <div className="contact_holder ch1">
            <div className='scroll'>            
              <h3>Follow me...</h3>
              <div className="social_media">
                <div>
                  <a
                    href="https://twitter.com/deronjbiles?lang=en"
                    target="blank"
                  >
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
                <div>
                  <a
                    href="https://scholar.google.com/citations?user=D_syC7YAAAAJ&hl=en"
                    target="blank"
                  >
                    <img
                      className="social_icon"
                      src="https://s3.amazonaws.com/libapps/customers/1627/images/google_scholar.PNG"
                      alt="Google Scholar logo"
                    />
                  </a>
                  <a
                    href="https://www.amazon.com/Deron-J.-Biles/e/B076V691MB/ref=dp_byline_cont_book_1"
                    target="blank"
                  >
                    <img
                      className="social_icon"
                      src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                      alt="Amazon logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_calendar">
        <Calendar type="homepage" />
      </div>
    </div>
    <div
      className="scroll_to_top"
      onClick={() => {
        window.scroll({ top: 800, behavior: 'smooth' });
      }}
    />
  </div>
);

export default IndexPage;
