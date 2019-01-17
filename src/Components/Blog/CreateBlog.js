import React, { Component } from 'react';
import axios from 'axios';
import Image from '../Utils/Func/imageUploader';
import moment from 'moment';
import request from 'superagent';

import './blog.css';

class CreateBlog extends Component {
  state = {
    blog: '',
    date: new Date(),
    image: '',
    title: 'Testing',
    topic: '',
    ctrl: false,
    articles: [],
    preview: ''
  };

  componentDidMount() {
    this.getBlog();
  }

  keyPress = e => {
    const { ctrl } = this.state;
    if (e.key === 'Tab') {
      e.preventDefault();
      this.setState({ blog: this.state.blog + '    ' });
    }
    if (e.key === 'Control') this.setState({ ctrl: true });
    if (ctrl && e.key === 'b') this.font('**');
    if (ctrl && e.key === 'u') this.font('__');
    if (ctrl && e.key === 'i') this.font('^^');
    if (ctrl && e.key === 'Enter') this.send();
  };

  up = e => {
    if (e.key === 'Control') this.setState({ ctrl: false });
  };

  textSelect = (elem, caretPos) => {
    if (elem != null) {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
        
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else {
          elem.focus();
        }
      }
    }
  };

  font = async e => {
   const selection = window.getSelection().toString(),
      element = document.getElementById('blog'),
      position = element.selectionStart,
      end = element.selectionEnd,
      str =
        this.state.blog.slice(0, position) +
        e[0] +
        selection +
        e[1] +
        this.state.blog.slice(end);

    if (selection) {
      await this.setState({ blog: str });
      await this.textSelect(element, end + 2);
    } else if (e === '**' && this.state.ctrl) {
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 2);
    } else if (e === '>') {
      await this.setState({ blog: this.state.blog + e});
      await this.textSelect(element, position + 2);
    } else {
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 1);
    }
 
  };

  send = e => {
    const { date, image, title, topic } = this.state;

    let str = this.state.blog
      .replace(/\*([^*]*)\*/g, '<b>$1</b>')
      .replace(/\^([^^]*)\^/g, '<em>$1</em>')
      .replace(/_([^_]*)_/g, '<u>$1</u>')
      .replace(/#([^#]*)#/g, '<h1>$1</h1>')
      .replace(/\{/g, '<center>')
      .replace(/\}/g, '</center>')
      .replace(/\>/g, '•');

      console.log(str.slice(0, 200) + '...')

    e.target.name === 'preview'
      ? this.setState({ preview: str })
      : axios
          .post('/api/article', {
            blog: str,
            date: moment(date).format('MMMM D, YYYY'),
            image,
            title,
            topic,
            description: str.slice(0, 200) + '...'
          })
          .then(() => {
            this.getBlog();
          })
          .catch(err => {
            console.log('error', err);
          });
  };

  getBlog = () => {
    axios.get('/api/articles').then(res => {
      this.setState({ articles: res.data });
    });
  };

  imageUpload = file => {
    let upload = request
      .post(process.env.REACT_APP_CLOUDINARY_URL)
      .field('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
      .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          image: response.body.secure_url
        });
      }
    });
  };

  render() {
    const { articles, image, preview } = this.state;
    // const desc = !!articles.length && articles[0].blog;
    const desc = preview ? preview : null;

    return (
      <div className="blog_main">
        <h1> Create Blog</h1>
        <input
          type="text"
          placeholder="Article title"
          className="blog_title"
          onChange={e => this.setState({ title: e.target.value })}
        />
        <Image imageUpload={this.imageUpload} image={image} />
        <div className="font_style">
          <div>
            <button onClick={(e) => this.font('**')}>
              <b>B</b>
            </button>
            <button onClick={(e) => this.font('^^')}>
              <em>I</em>
            </button>
            <button onClick={(e) => this.font('__')}>
              <u>U</u>
            </button>
            <button onClick={(e) => this.font('##')}>Header</button>
            <button onClick={(e) => this.font('{}')}>Center</button>
            <button onClick={(e) => this.font('>')}>
              <img
                src="https://image.flaticon.com/icons/svg/483/483226.svg"
                alt="bullets"
              />
            </button>
            <button onClick={(e) => this.font('>')}>
              <img
                src="https://image.flaticon.com/icons/svg/59/59127.svg"
                alt="numbered list"
              />
            </button>
          </div>
          <div>
            <button name="preview" onClick={this.send}>
              Preview
            </button>
          </div>
        </div>
        <textarea
          autoFocus
          name=""
          id="blog"
          cols="30"
          rows="10"
          onChange={e => this.setState({ blog: e.target.value })}
          onKeyDown={this.keyPress}
          onKeyUp={this.up}
          value={this.state.blog}
        />
        <div>
          <p>Topics (separated by a comma)</p>
          <input
            type="text"
            onChange={e => this.setState({ topic: e.target.value })}
          />
        </div>
        <button onClick={this.send}>Send</button>
        <h2 className="blog_preview">
          <span>Preview</span>
        </h2>
        <pre className="blog_text" dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    );
  }
}

export default CreateBlog;
