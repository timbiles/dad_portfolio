import React, { Component } from 'react';

import Verse from '../VerseGenerator/VerseGenerator';
import './Resources.css';

export default class Resources extends Component {
  render() {
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
            <div>
              <a href="http://media.swbts.edu/item/1015/how-will-you-be-remembered">
                How will you be remembered?
              </a>
              <p>October 29, 2014</p>
            </div>
            <div>
              <a href="http://media.swbts.edu/item/2302/choosing-gods-way">
                Choosing God's way
              </a>
              <p>April 13, 2017</p>
            </div>
            <div>
              <a href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2008/">
                Ezekiel Sermon
              </a>
              <p>October 14, 2008</p>
            </div>
            <div>
              <a href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2006/">
                Ezra Sermon
              </a>
              <p>November 14, 2006</p>
            </div>
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
