import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Carousel from '../Carousel/Carousel';
import NewCarousel from '../Carousel/NewCarousel';
import Verse from '../VerseGenerator/VerseGenerator';
import './Library.css';

class Library extends Component {
  state = {
    books: [
      {
        title: 'Pastoral Ministry',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71MhnxAXIxL.jpg'
      },
      {
        title: `After God's Heart`,
        img:
          'https://images-na.ssl-images-amazon.com/images/I/41Zm54tcECL._SX322_BO1,204,203,200_.jpg'
      },
      {
        title: 'Seminary Education',
        img:
          'http://csm-publishing.org/wp-content/uploads/2015/03/SEE_FA-194x300.jpg'
      }
    ]
  };

  render() {
    const bookMap = this.state.books.map((e, i) => {
      return (
        <Link key={i} to={`/books/${e.title}`}>
          <div className="portfolio_sub">
            <img className="book" src={e.img} alt={e.title} />
          </div>
        </Link>
      );
    });
    return (
      <div className="portfolio">
        <div className="portfolio_container">
          <div className="bio_name_sub">
            <div className="line_container">
              <div className="a_line" />
              <div className="a_line" />
            </div>
            <Fade cascade>
              <h1>Library</h1>
            </Fade>
            <div className="line_container">
              <div className="a_line" />
              <div className="a_line" />
            </div>
          </div>
          <div className="portfolio_sub">{bookMap}</div>
          <div className="resources_bottom">
            <div>
              {/* <Carousel /> */}
              <NewCarousel />
            </div>
          </div>
          <div className="chapel_sermons">
            <div className="chapel_sermons_sub cs1">
              <h2>SWBTS Chapel Sermons</h2>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon/choosing-gods-way/"
                >
                  Choosing God's way
                </a>
                <div className="chapel_sub">
                  <img
                    className="chapel_img"
                    src="http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg"
                    alt="Chapel 2"
                  />
                  <div>
                    <p>April 13, 2017</p>
                    <p>
                      His faithfulness challenges believers today to run the Way
                      of His Word.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon/how-will-you-be-remembered/"
                >
                  How will you be remembered?
                </a>
                <div className="chapel_sub">
                  <img
                    className="chapel_img"
                    src="http://cdn1.swbts.edu/media/2014/10/10-29-14_DeronBiles72_NW_2137.jpg"
                    alt="Chapel 1"
                  />
                  <p>October 29, 2014</p>
                </div>
              </div>

              <div>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2008/"
                >
                  Be a Pastor
                </a>
                <div className="chapel_sub">
                  <img
                    className="chapel_img"
                    src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/21014185_10155431459670661_5619186887203882438_o.jpg?_nc_cat=0&oh=ba3efcb8348927471d0652f883d2eff7&oe=5BF39DBE"
                    alt="Chapel 2"
                  />
                  <div>
                    <p>October 14, 2008</p>
                    <p>
                      God does not leave the care of the sheep only to earthly
                      shepherds. God, Himself, promises to care for His sheep.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2006/"
                >
                  A Model for Faithful Ministry
                </a>
                <div className="chapel_sub">
                  <img
                    className="chapel_img"
                    src="http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg"
                    alt="Chapel 2"
                  />
                  <div>
                    <p>November 14, 2006</p>
                    <p>
                      In Ezra 7:10, we find the secret to his effectiveness.
                      Ezra prepared his heart to study, do, and teach the Word
                      of God.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chapel_sermons_sub">
              <h2>Preaching Source</h2>
              <div className="chapel_sub1">
                <img
                  className="preaching_source"
                  src="http://preachingsource.com/wp-content/uploads/2016/08/Genesis.jpg"
                  alt="Genesis"
                />
                <p>
                  The Genesis Sermon Structures were written by Dr. Deron Biles.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon-structures/genesis-sermon-structures/"
                >
                  Genesis Sermon Structures
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon-starter/genesis-sermon-starter/"
                >
                  Genesis Sermon Starter
                </a>
              </div>
            </div>
          </div>
          <Verse />
        </div>
      </div>
    );
  }
}

export default Library;
