import React, { Component } from 'react';

import Verse from '../VerseGenerator/VerseGenerator';
import './Resources.css';

export default class Resources extends Component {
  state = {
    sermons: [
      {link: 'http://media.swbts.edu/item/1015/how-will-you-be-remembered', title: 'How will you be remembered?', date: 'October 29, 2014'},
      {link: 'http://media.swbts.edu/item/2302/choosing-gods-way', title: 'Choosing God\'s way', date: 'April 13, 2017'},
      {link: 'http://preachingsource.com/sermon/swbts-chapel-deron-biles-2008/', title: 'Ezekiel Sermon', date: 'October 14, 2008'},
      {link: 'http://preachingsource.com/sermon/swbts-chapel-deron-biles-2006/', title: 'Ezra Sermon', date: 'November 14, 2006'}
    ]
  }
  render() {
    const map = this.state.sermons.map((e,i) => {
      return <div key={i}>
      <a href={e.link}>
        {e.title}
      </a>
      <p>{e.date}</p>
      </div>
    })
    return (
      <div className="resources">
        <div className="bio_name_sub resources_top">
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
          <h1 className="about_name">Resources</h1>
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
        </div>
        <div className="resources_container">
          <div className='chapel_sermons'>
            <h2>SWBTS Chapel Sermons</h2>
              {map}
          </div>
          <div>
            <h2>Preaching Source</h2>
            <a href="http://preachingsource.com/?s=biles" target="blank">
              Preaching Source
            </a>
          </div>
          <div>
            <h2>Writing Projects</h2>
            <a href="https://scholar.google.com/citations?user=D_syC7YAAAAJ&hl=en">
              Google Scholar
            </a>
          </div>
          <div>
            <h2>Conferences</h2>
          </div>
        </div>
        <Verse />
      </div>
    );
  }
}
