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

    if (this.props.type !== 'preview') {
      this.setState({
        title: this.props.match.params.title.replace(/-/g, ' ')
      });
    }
  }

  render() {
    let blog =
      this.props.type === 'preview'
        ? this.props.blog
        : this.state.blog.find(e => e.title.trim() === this.state.title) ||
          false;

    let font;
    if (this.props.type === 'preview') {
      font = +blog.fontSize + 4 + 'px';
    } else {
      font = +blog.fontSize + 4 + 'px';
    }

    return (
      <div className="blog_cont">
        <h1>{blog && blog.title}</h1>
        <img src={blog.image || blog.img} alt={blog.title} />
        <div className="blog_sub">
          <p>
            <mark>Dr. Deron Biles</mark> | {blog.date}
          </p>
        </div>
        <pre
          className="individual blog_text"
          style={{ fontSize: font }}
          dangerouslySetInnerHTML={{
            __html: this.props.type === 'preview' ? blog.preview : blog.blog
          }}
        />
        {blog.topic && (
          <p>
            <span className="blog_mark">Keywords </span>|{' '}
            <mark>{blog.topic.replace(/,/g, ' · ')}</mark>
          </p>
        )}
        <div className="about-the-author">
          <div className="about-the-author-sub">
            <p>
              Written by
              <span>Dr. Deron Biles</span>
            </p>
            <a href="/about">
              <p>Check out his bio.</p>
            </a>
          </div>
        </div>
        <VerseGenerator />
      </div>
    );
  }
}

export default Blog;
