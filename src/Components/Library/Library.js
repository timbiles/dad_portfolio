import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { line } from '../Tools/Func/line';
import { LIST } from '../../utils/constants/lists'

import Verse from '../VerseGenerator/VerseGenerator';
import './Library.css';
import preachingsource from './images/preaching-source-logo.png';

class Library extends Component {


  render() {
    const bookMap = LIST.books.map((e, i) => {
      return (
        <Link key={i} to={`/books/${e.title}`}>
          <div className="portfolio_sub1">
            <img className="book" src={e.img} alt={e.title} />
          </div>
        
        </Link>
      );
    });

    const sermonMap = LIST.sermons.map((e, i) => {
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
    const sermonMap2 = LIST.sermons.map((e, i) => {
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

    const psMap = LIST.preachingSource.map((e, i) => {
      return <a
      key={i}
      target="blank"
      rel="noreferrer noopener"
      href={e.url}
    >
      {e.text}
    </a>
    })

    return (
      <div className="portfolio">
        <div className="portfolio_container">
          <div className="bio_name_sub">
            {line('Library')}
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
                { psMap }
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
