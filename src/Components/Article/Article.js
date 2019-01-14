import React, { Component } from 'react';
import { line } from '../Utils/Func/line';

import './Article.css';
import ArticleList from './ArticleList';

import VerseGenerator from '../VerseGenerator/VerseGenerator';


class Article extends Component {
  render() {
    return (
      <div className="article">
        <div className="bio_name_sub">
        {line('Articles')}
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
