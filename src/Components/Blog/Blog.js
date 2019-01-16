import React, { Component } from 'react';
// import Test from './test';
import axios from 'axios';
import Image from '../Utils/Func/imageUploader';
import request from 'superagent';

import './blog.css';

class blog extends Component {
  state = {
    blog: '',
    date: new Date(),
    image: '',
    title: 'Testing',
    ctrl: false,
    articles: [],
    testStr: ''
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

  textSelect = (inp, s, e) => {
    e = e || s;
    if (inp.createTextRange) {
      var r = inp.createTextRange();
      r.collapse(true);
      r.moveEnd('character', e);
      r.moveStart('character', s);
      r.select();
    } else if (inp.setSelectionRange) {
      inp.focus();
      inp.setSelectionRange(s, e);
    }
  };

  font = async e => {
    const selection = window.getSelection().toString(),
      element = document.getElementById('blog'),
      position = element.selectionStart,
      str = this.state.blog.replace(selection, e[0] + selection + e[1]);

    if (selection) {
     this.setState({ blog: str });
    } else {
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 1);
    }
  };

  send = () => {
    // const { date, img, title } = this.state;
    let str = this.state.blog
      .replace(/\*([^*]*)\*/g, '<b>$1</b>')
      .replace(/\^([^^]*)\^/g, '<em>$1</em>')
      .replace(/_([^_]*)_/g, '<u>$1</u>')
      .replace(/#([^#]*)#/g, '<h1>$1</h1>')
      .replace(/\{/g, '<center>')
      .replace(/\}/g, '</center>')

    // axios
    //   .post('/api/article', { blog: str, date, img, title })
    //   .then(() => {
    //     this.getBlog();
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   });

    this.setState({testStr: str})
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
        console.log(response)
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
    const { articles, image } = this.state;

    // const desc = !!articles.length && articles[0].blog;
    const desc = this.state.testStr

    return (
      <div className="blog_main">
        <h1> Create Blog</h1>
        <input
          type="text"
          placeholder="Article title"
          className='blog_title'
          onChange={e => this.setState({ title: e.target.value })}
        />
        <Image imageUpload={this.imageUpload} image={image}/>
        <div className="font_style">
          <button onClick={() => this.font('**')}>Bold</button>
          <button onClick={() => this.font('^^')}>Italic</button>
          <button onClick={() => this.font('__')}>Underline</button>
          <button onClick={() => this.font('##')}>Header</button>
          <button onClick={() => this.font('{}')}>Center</button>
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
        {/* <Test blog={this.state.blog} /> */}
        <div>
          <p>Topics (separated by a comma)</p>
          <input type="text" />
        </div>
        <button onClick={this.send}>Send</button>
        <h2 className='blog_preview'><span>Preview</span></h2>
        <pre className="blog_text" dangerouslySetInnerHTML={{ __html: desc}} />
      </div>
    );
  }
}

export default blog;
