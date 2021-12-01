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
    const { params } = this.props.match;
    let book =
      LIST.books.find(e => e.title === this.props.match.params.title.replace(/-/g, ' ')) || false;

    return (
      <div className="book_main">
        <div className="book_title">{line(book.title)}</div>
        <div className="book_container">
          <img className="book2" src={book.img} alt={book.title} />
          <div className="book_sub">
            <p>{book.description}</p>
            <p>Buy now on:</p>
            {params.title === 'Pastoral-Ministry' ? (
              <div className="buy">
                {this.map(purchase[0])}

                {this.map(purchase[1])}
              </div>
            ) : params.title === `After-God's-Heart:-Becoming-Who-God-is-Seeking` ? (
              this.map(purchase[5])
            ) : params.title === `After-God's-Heart` ? (
              this.map(purchase[2])
            ) : params.title === `Bible-Dictionary` ? (
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
            {params.title === 'Pastoral-Ministry' ? (
              <div className="buy">
                {this.map(purchase[0])}

                {this.map(purchase[1])}
              </div>
            ) : params.title === `After-God's-Heart:-Becoming-Who-God-is-Seeking` ? (
                this.map(purchase[5])
            ) : params.title === `After-God's-Heart` ? (
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
