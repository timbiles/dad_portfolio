import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

// import Carousel from '../Carousel/Carousel';
import Verse from '../VerseGenerator/VerseGenerator';
import './Library.css';
import preachingsource from './images/preaching-source-logo.png';
import preaching1 from './images/preaching1.jpg';
// import sermon2018 from './images/sermon2018.jpg';

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
          <div className="portfolio_sub1">
            <img className="book" src={e.img} alt={e.title} />
          </div>
        
        </Link>
      );
    });

    const sermons = [
      {
        title: `Is Doubt Sin`,
        img: `http://cdn1.swbts.edu/media/2018/9/20180906DeronBiles042Web.jpg`,
        date: `September 6, 2018`,
        desc: `What should we do when we are waiting on God?  That's the situation in which the Prophet Habakkuk found himself.`,
        url: `http://media.swbts.edu/item/2399/is-doubt-sin`
      },
      {
        title: `Choosing God's Way`,
        img: `http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg`,
        date: `April 13, 2017`,
        desc: `God's faithfulness challenges believers today to run the Way
        of His Word.`,
        url: `http://preachingsource.com/sermon/choosing-gods-way/`
      },
      {
        title: `How will you be remembered?`,
        img: `http://cdn1.swbts.edu/media/2014/10/10-29-14_DeronBiles72_NW_2137.jpg`,
        date: `October 29, 2014`,
        desc: `Hidden in a story of Jehoshaphat’s mighty men is the story of a man named, Amasiah. His story challenges us to consider how we will be remembered.`,
        url: `http://preachingsource.com/sermon/how-will-you-be-remembered/`
      },
      {
        title: `Be a Pastor`,
        img: `https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/21014185_10155431459670661_5619186887203882438_o.jpg?_nc_cat=0&oh=ba3efcb8348927471d0652f883d2eff7&oe=5BF39DBE`,
        date: `October 14, 2008`,
        desc: `God does not leave the care of the sheep only to earthly
        shepherds. God, Himself, promises to care for His sheep.`,
        url: `http://preachingsource.com/sermon/swbts-chapel-deron-biles-2008/`
      },
      {
        title: `A Model for Faithful Ministry`,
        // img: `http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg`,
        img: preaching1,
        date: `November 14, 2006`,
        desc: `In Ezra 7:10, we find the secret to his effectiveness.
        Ezra prepared his heart to study, do, and teach the Word
        of God.`,
        url: `http://preachingsource.com/sermon/swbts-chapel-deron-biles-2006/`
      }
    ];

    const sermonMap = sermons.map((e, i) => {
      return (
        <div className="sermons_map" key={i}>
          <a
            className="sermon_title"
            target="blank"
            rel="noreferrer noopener"
            href={e.url}
          >
            {e.title}
          </a>
          <div className="chapel_sub">
            <div className="cs-1">
              <img className="chapel_img" src={e.img} alt="Chapel 2" />
            </div>
            <div className="cs2">
              <p>{e.date}</p>
              <p>{e.desc}</p>
            </div>
          </div>
        </div>
      );
    });
    const sermonMap2 = sermons.map((e, i) => {
      return (
        <div className="sermons_map" key={i}>
          <div className="cs-1">
            <img className="chapel_img" src={e.img} alt="Chapel 2" />
          </div>
          <div className="chapel_sub">
            <a
              className="sermon_title"
              target="blank"
              rel="noreferrer noopener"
              href={e.url}
            >
              {e.title}
            </a>
            <div className="cs2">
              <p>{e.date}</p>
              <p>{e.desc}</p>
            </div>
          </div>
        </div>
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
          <div className="portfolio_sub books_top">{bookMap}</div>

          <div className="chapel_sermons">
            <div className="chapel_sermons_sub cs1">
              <h2>SWBTS Chapel Sermons</h2>
              <div className="big_map">{sermonMap}</div>
              <div className="small_map">{sermonMap2}</div>
              <div />
            </div>
            <div className="chapel_sermons_sub">
              <h2>Preaching Source</h2>
              <div className="chapel_sub1">
                <img
                  className="preaching_source"
                  src={preachingsource}
                  alt="Genesis"
                />
                <p>
                  Preaching Source is a text-driven resource of Southwestern
                  Baptist Theological Seminary dedicated to equip preachers in
                  the art and craft of text-driven preaching.
                </p>
                <a
                  target="blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon-structures/genesis-sermon-structures/"
                >
                  Genesis Sermon Structures
                </a>
                <a
                  target="blank"
                  rel="noreferrer noopener"
                  href="http://preachingsource.com/sermon-starter/genesis-sermon-starter/"
                >
                  Genesis Sermon Starter
                </a>
                <a
                  target="blank"
                  href="http://preachingsource.com/sermon-structure/2-timothy-sermon-structures/"
                >
                  2 Timothy Sermon Structures
                </a>
                <a
                  target="blank"
                  href="http://preachingsource.com/conference/breakout-session-deron-biles/"
                >
                  Breakout Session - 2017
                </a>
                <a
                  target="blank"
                  href="http://preachingsource.com/conference/breakout-session-deron-biles-2/"
                >
                  Breakout Session - 2018

                </a>
              </div>
              <h2>Preaching Points</h2>
              <div className="chapel_sub1">
                <img
                  className="preaching_source sbtc_logo"
                  src='https://i.vimeocdn.com/portrait/14963457_300x300'
                  alt="SBTC"
                />
                <p>
                  Preaching Points from SBTC
                </p>
                <a
                  target="blank"
                  rel="noreferrer noopener"
                  href="https://sbtexas.com/onlinetraining/preaching-points-series/year-1/minor-prophets-12-week-series/c-134/"
                >
                  Minor Prophets series
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
