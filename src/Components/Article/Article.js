import React, { Component } from 'react';

import './Article.css';
import ArticleList from './ArticleList';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <h1>Articles</h1>
        <div className="article_main">
          <ArticleList type='main'/>
        </div>
      </div>
    );
  }
}

export default Article;
