import React, { Component } from 'react';
import axios from 'axios';
import Image from '../Tools/Func/imageUploader';
import moment from 'moment';
import request from 'superagent';
import Blog from './Blog';
import swal from 'sweetalert2';

import './blog.css';

class CreateBlog extends Component {
  state = {
    blog: '',
    date: moment(new Date()).format('MMMM D, YYYY'),
    image: '',
    title: '',
    topic: '',
    ctrl: false,
    articles: [],
    preview: '',
    hit: 0,
    user: ''
  };

  componentDidMount() {
    this.login();
  }

  login = () => {
    axios
      .get('/api/logged-in')
      .then(res => {
        this.setState({ user: res.data.username });
      })
      .catch(() => {
        console.log('Make sure to log in.');
      });
  };

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
    let selection = window.getSelection().toString(),
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
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 2);
    } else {
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 1);
    }
  };

  send = e => {
    const { date, image, title, topic } = this.state;

    const blogLink = this.state.blog.split('~')
    console.log(blogLink[1].split(','))



    let str = this.state.blog
      .replace(/>/g, '•')
      .replace(/\*([^*]*)\*/g, '<b>$1</b>')
      .replace(/\^([^^]*)\^/g, '<em>$1</em>')
      .replace(/_([^_]*)_/g, '<u>$1</u>')
      .replace(/#([^#]*)#/g, '<h2>$1</h2>')
      .replace(/\{/g, '<center>')
      .replace(/\}/g, '</center>')
      .replace(/\~([^~]*)\,([^~]*)~/g, '<a href="$2" target="blank">$1</a>')



    e.target.name === 'preview'
      ? this.setState({ preview: str })
      : axios
          .post('/api/article', {
            blog: str,
            date,
            img: image,
            title,
            topic,
            description: str.slice(0, 200) + '...'
          })
          .then(() => {
            swal({
              position: 'top-end',
              title: `You created an article titled ${title}`,
              showConfirmButton: false,
              background: 'rgb(204,204,204)',
              timer: 2000
            });
            setTimeout(() => {
              window.location.replace('/article');
            }, 1500);
          })
          .catch(err => {
            console.log('error', err);
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
    const { image, preview, user } = this.state;

    return (
      user && (
        <div className="blog_main">
          <h1> Compose</h1>
          <input
            type="text"
            placeholder="Article title"
            className="blog_title"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <Image imageUpload={this.imageUpload} image={image} />
          <p className='create-blog-image-text'>The main article image is better optimized landscape (horizontal).</p>
          <div className="font_style">
            <div className='create-blog-button-holder'>
              <button onClick={() => this.font('**')}>
                <b>B</b>
              </button>
              <button onClick={() => this.font('^^')}>
                <em>I</em>
              </button>
              <button onClick={() => this.font('__')}>
                <u>U</u>
              </button>
              <button onClick={() => this.font('##')}>Header</button>
              <button onClick={() => this.font('{}')}>Center</button>
              <button onClick={() => this.font('>')}>
                <img
                  src="https://image.flaticon.com/icons/svg/483/483226.svg"
                  alt="bullets"
                />
              </button>
              <button onClick={() => this.font('>')}>
                <img
                  src="https://image.flaticon.com/icons/svg/59/59127.svg"
                  alt="numbered list"
                />
              </button>
              <button onClick={() => this.font('~ text to display, external link ~')}>Link</button>
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
          <div className="blog_topics">
            <p>Topics (separated by a comma)</p>
            <input
              type="text"
              onChange={e => this.setState({ topic: e.target.value })}
            />
          </div>
          <button id="create-blog-send" onClick={this.send}>
            Submit Article
          </button>
          <h2 className="blog_preview">
            <span>Preview</span>
          </h2>
          {preview && <Blog type="preview" blog={this.state} />}
        </div>
      )
    );
  }
}

export default CreateBlog;
