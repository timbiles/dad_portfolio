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

  bold = () => {
   const selection = window.getSelection().toString()
    let str = this.state.blog.replace(selection, selection.bold())
// console.log(str)
   console.log(selection)
   this.setState({blog: str})
  }

  render() {
    console.log(this.state.blog)
    return (
      <div className="blog_main">
        <h1> Create Blog</h1>
        <input type="text" placeholder="Title" />
        <div className='font_style'>
          <button onClick={this.bold}>Bold</button>
          <button>Italic</button>
          <button>Underline</button>
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
