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
        <VerseGenerator />
      </div>
    );
  }
}

export default Article;
