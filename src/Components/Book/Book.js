import React, { Component } from 'react';
import { line } from '../Tools/Func/line';

import './Book.css';
import VerseGenerator from '../VerseGenerator/VerseGenerator';

class Book extends Component {
  state = {
    books: [
      {
        title: 'Pastoral Ministry',
        description: `Being a pastor is an audacious calling—both a remarkable privilege
                and an unaccomplishable task. In general, the Bible talks about
                the identity of a shepherd more than the activity of a shepherd.
                Yet both are vital in ministry. Ezekiel 34 is God’s message to
                pastors: His template by which our ministries will be measured.
                Pastoral Ministry brings together this mandate of God, the needs
                of the sheep, and the model of the good Shepherd to uniquely
                inspire and equip you to fulfill your ministry as a shepherd.`,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71MhnxAXIxL.jpg'
      },
      {
        title: `After God's Heart`,
        description: `"Deron Biles is a man after God's heart. In his book he wishes to
                challenge all men to find the transforming power of God's Word.
                Learn how to be God's man!"`,
        img:
          'https://images-na.ssl-images-amazon.com/images/I/41Zm54tcECL._SX322_BO1,204,203,200_.jpg'
      },
      {
        title: 'Seminary Education',
        description: `Technology has changed every facet of our lives. It is even
                changing the face of education (and sometimes for the better). We
                live in a day where information is considered EQUIVALENT to
                instruction; where the accumulation of data is misinterpreted as
                education. This is the consummate challenge of our time. And
                nowhere is this more significant than in theological education. We
                are the defenders of higher learning, critical thinking, spiritual
                heritage, and Biblical exegesis. It may be counter-cultural; it
                may be uncool; it may be antiquated; but it is the task with which
                we have been entrusted. And the impact of our success will imprint
                a generation!`,
        img:
          'https://csm-publishing.org/wp-content/uploads/2015/03/SEE_FA-194x300.jpg'
      },
      {
        title: 'Bible Dictionary',

        description: `This volume is an outstanding one-volume resource in Biblical study.  The work was edited by Tremper Longman and includes a comprehensive list of articles on a vast array of Biblical topics.  Dr. Biles contributed 65 articles for this volume.`,
        img:
          'https://images-na.ssl-images-amazon.com/images/I/51%2Bzx0gtW2L._SX343_BO1,204,203,200_.jpg'
      }
    ]
  };
  render() {
    let book =
      this.state.books.find(e => e.title === this.props.match.params.title) ||
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
