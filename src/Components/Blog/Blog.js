import React, { Component } from 'react';
import Test from './test';
import './blog.css';

class blog extends Component {
  state = {
    blog: ''
  };

  keyPress = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      this.setState({ blog: this.state.blog + '    ' });
    }
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
      str = this.state.blog.replace(selection, e[0] + selection + e[0]);

    if (selection) {
      await this.setState({ blog: str });
    } else {
      await this.setState({ blog: this.state.blog + e });
      await this.textSelect(element, position + 1);
      await console.log(position);
    }
  };

  render() {
    return (
      <div className="blog_main">
        {/* <h1> Create Blog</h1> */}
        <input type="text" placeholder="Title" />
        <div className="font_style">
          <button onClick={() => this.font('**')}>Bold</button>
          <button onClick={() => this.font('^^')}>Italic</button>
          <button onClick={() => this.font('__')}>Underline</button>
        </div>
        <textarea
          autoFocus
          name=""
          id="blog"
          cols="30"
          rows="10"
          onChange={e => this.setState({ blog: e.target.value })}
          onKeyDown={this.keyPress}
          value={this.state.blog}
        />
        <Test blog={this.state.blog} />
      </div>
    );
  }
}

export default blog;
