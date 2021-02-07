import React, { Component } from 'react';
import { line } from '../Tools/Func/line';
import { LIST } from '../../utils/constants/lists';
import { purchase } from '../../utils/data/purchase';

import './Book.css';
import VerseGenerator from '../VerseGenerator/VerseGenerator';

class Book extends Component {
  map = val => {
    return (
      <div className={val.className}>
        <img className="book_icon" src={val.img} alt="Amazon logo" />
        <a href={val.url} target="blank">
          <p>{val.text}</p>
        </a>
      </div>
    );
  };

  render() {
    let book =
      LIST.books.find(e => e.title === this.props.match.params.title) || false;

      console.log('this.props.match', this.props.match)
    return (
      <div className="book_main">
        <div className="book_title">{line(book.title)}</div>
        <div className="book_container">
          <img className="book2" src={book.img} alt={book.title} />
          <div className="book_sub">
            <p>{book.description}</p>
            <p>Buy now on:</p>
            {window.location.pathname === '/books/Pastoral%20Ministry' ? (
              <div className="buy">
                {this.map(purchase[0])}

                {this.map(purchase[1])}
              </div>
            ) : window.location.pathname === `/books/After%20God's%20Heart` ? (
              this.map(purchase[2])
            ) : window.location.pathname === `/books/Bible%20Dictionary` ? (
              this.map(purchase[3])
            ) : (
              this.map(purchase[4])
            )}
          </div>
        </div>
        <div className="book_container2">
          <div className="bc_top">
            <img className="book2" src={book.img} alt={book.title} />
            <p>{book.description}</p>
          </div>
          <div className="book_sub">
            <p>Buy now on:</p>
            {window.location.pathname === '/books/Pastoral%20Ministry' ? (
              <div className="buy">
                {this.map(purchase[0])}

                {this.map(purchase[1])}
              </div>
            ) : window.location.pathname === `/books/After%20God's%20Heart` ? (
              this.map(purchase[2])
            ) : (
              this.map(purchase[4])
            )}
          </div>
        </div>
        <VerseGenerator />
      </div>
    );
  }
}

export default Book;
