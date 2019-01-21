import React, { Component } from 'react';
import axios from 'axios';

import VerseGenerator from '../VerseGenerator/VerseGenerator';

class Blog extends Component {
  state = {
    blog: []
  };

  componentDidMount() {
    axios.get('/api/articles').then(res => {
      this.setState({ blog: res.data });
    });
  }

  render() {
    let blog =
    this.props.type === 'preview' 
      ? this.props.blog
      : this.state.blog.find(
        e => e.title.trim() === this.props.match.params.title
      ) || false;

    return (
      <div className="blog_cont">
        <h1>{blog && blog.title}</h1>
        <img src={blog.img} alt={blog.title} />
        <div className="blog_sub">
          <p>
            <mark>Dr. Deron Biles</mark> | {blog.date}
          </p>
        </div>
        <pre
          className="individual blog_text"
          dangerouslySetInnerHTML={{ __html: this.props.type === 'preview' ? blog.preview : blog.blog }}
        />
        {blog.topic && (
          <p>
            <span className="blog_mark">Keywords </span>|{' '}
            <mark>{blog.topic.replace(/,/g, ' · ')}</mark>
          </p>
        )}
        <VerseGenerator />
      </div>
    );
  }
}

export default Blog;
