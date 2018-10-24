import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './Article.css';
import ArticleList from './ArticleList';

import VerseGenerator from '../VerseGenerator/VerseGenerator';


class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="bio_name_sub">
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
          <Fade cascade>
            <h1 className="about_name">Articles</h1>
          </Fade>
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
        </div>
        <div className="article_main">
          <ArticleList type="main" />
        </div>

        <svg className="svg" viewBox="0 0 128 128">
          <path
            id="original-plain"
            class="cls-1"
            d="M116.42,5.07H11.58a6.5,6.5,0,0,0-6.5,6.5V116.42a6.5,6.5,0,0,0,6.5,6.5H68V77.29H52.66V59.5H68V46.38c0-15.22,9.3-23.51,22.88-23.51a126,126,0,0,1,13.72.7V39.48H95.21c-7.39,0-8.82,3.51-8.82,8.66V59.5H104l-2.29,17.79H86.39v45.64h30a6.51,6.51,0,0,0,6.5-6.5V11.58A6.5,6.5,0,0,0,116.42,5.07Z"
          />
        </svg>
       
                 

        <VerseGenerator />
      </div>
    );
  }
}

export default Article;
