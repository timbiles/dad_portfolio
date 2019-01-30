import React, { Component } from 'react';
import { line } from '../Tools/Func/line';
import { LIST } from '../../utils/constants/lists';

import './Book.css';
import VerseGenerator from '../VerseGenerator/VerseGenerator';

class Book extends Component {
  render() {
    let book =
      LIST.books.find(e => e.title === this.props.match.params.title) ||
      false;
    return (
      <div className="book_main">
        <div className="book_title">
        {line(book.title)}
        </div>
        <div className="book_container">
          <img className="book2" src={book.img} alt={book.title} />
          <div className="book_sub">
            <p>{book.description}</p>
            <p>Buy now on:</p>
            {window.location.pathname === '/books/Pastoral%20Ministry' ? (
              <div className="buy">
                <div className="book_buy">
                  <img
                    className="book_icon"
                    src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                    alt="Amazon logo"
                  />
                  <a
                    href="https://www.amazon.com/gp/product/1462751024/ref=dbs_a_def_rwt_bibl_vppi_i0"
                    target="blank"
                  >
                    <p>Amazon</p>
                  </a>
                </div>
                <div className="book_buy">
                  <img
                    className="book_icon"
                    src="https://s3.amazonaws.com/LWbranding/aem-imgs/logo/lw-icon-social.png"
                    alt="Lifeway logo"
                  />
                  <a
                    href="https://www.lifeway.com/en/product/pastoral-ministry-P005794959"
                    target="blank"
                  >
                    <p>Lifeway</p>
                  </a>
                </div>
              </div>
            ) : window.location.pathname === `/books/After%20God's%20Heart` ? (
              <div className="buy buy2">
                <img
                  className="book_icon"
                  src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                  alt="Amazon logo"
                />
                <a
                  href="https://www.amazon.com/gp/product/143274836X/ref=dbs_a_def_rwt_bibl_vppi_i1"
                  target="blank"
                >
                  <p>Amazon</p>
                </a>
              </div>
            ) : window.location.pathname ===
            `/books/Bible%20Dictionary` ? (
              <div className="buy buy2">
                <img
                  className="book_icon"
                  src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                  alt="Amazon logo"
                />
                <a
                  href="https://www.amazon.com/Baker-Illustrated-Bible-Dictionary/dp/080101297X"
                  target="blank"
                >
                  <p>Amazon</p>
                </a>
              </div>
            ) : (
              <div className="buy buy2">
                <img
                  className="book_icon"
                  src="https://pbs.twimg.com/profile_images/634254671708729344/dSkivS_4_400x400.jpg"
                  alt="CSM Publishing logo"
                />
                <a
                  href="https://res.cloudinary.com/dwvrok1le/image/upload/v1547431582/csm_publishing.jpg"
                  target="blank"
                >
                  <p>CMS Publishing</p>
                </a>
              </div>
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
                <div className="book_buy">
                  <img
                    className="book_icon"
                    src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                    alt="Amazon logo"
                  />
                  <a
                    href="https://www.amazon.com/gp/product/1462751024/ref=dbs_a_def_rwt_bibl_vppi_i0"
                    target="blank"
                  >
                    <p>Amazon</p>
                  </a>
                </div>
                <div className="book_buy">
                  <img
                    className="book_icon"
                    src="https://s3.amazonaws.com/LWbranding/aem-imgs/logo/lw-icon-social.png"
                    alt="Lifeway logo"
                  />
                  <a
                    href="https://www.lifeway.com/en/product/pastoral-ministry-P005794959"
                    target="blank"
                  >
                    <p>Lifeway</p>
                  </a>
                </div>
              </div>
            ) : window.location.pathname === `/books/After%20God's%20Heart` ? (
              <div className="buy buy_2">
                <img
                  className="book_icon"
                  src="https://www.vmastoryboard.com/wp-content/uploads/2014/08/Amazon-A-Logo.jpg"
                  alt="Amazon logo"
                />
                <a
                  href="https://www.amazon.com/gp/product/143274836X/ref=dbs_a_def_rwt_bibl_vppi_i1"
                  target="blank"
                >
                  <p>Amazon</p>
                </a>
              </div>
            ) : (
              <div className="buy buy_2">
                <img
                  className="book_icon"
                  src="https://pbs.twimg.com/profile_images/634254671708729344/dSkivS_4_400x400.jpg"
                  alt="CSM Publishing logo"
                />
                <a
                  href="https://res.cloudinary.com/dwvrok1le/image/upload/v1547431582/csm_publishing.jpg"                
                  target="blank"
                >
                  <p>CMS Publishing</p>
                </a>
              </div>
            )}
          </div>
        </div>
        <VerseGenerator />
      </div>
    );
  }
}

export default Book;
