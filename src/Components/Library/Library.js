import React from 'react'

import Carousel from '../Carousel/Carousel';

import './Library.css'

const Library = () => (
  <div className="portfolio">
    <div className="portfolio_container">
      <div className="bio_name_sub">
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
        <h1>Library</h1>
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
      </div>
      <div className="portfolio_sub">
        <div>
          <img
            className="book"
            src="https://images-na.ssl-images-amazon.com/images/I/71MhnxAXIxL.jpg"
            alt="The Ministry of a Shephard"
          />
          <div>
            <h2>The Ministry of a Shephard</h2>
            <p>
              "So he shepherded them according to the integrity of his heart,
              and guided them by the skillfulness of his hands."
              <br /> —Psalm 78:72
            </p>

            <p>
              Being a pastor is an audacious calling—both a remarkable privilege
              and an unaccomplishable task. In general, the Bible talks about
              the identity of a shepherd more than the activity of a shepherd.
              Yet both are vital in ministry. Ezekiel 34 is God’s message to
              pastors: His template by which our ministries will be measured.
              Pastoral Ministry brings together this mandate of God, the needs
              of the sheep, and the model of the good Shepherd to uniquely
              inspire and equip you to fulfill your ministry as a shepherd.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2>After God's Heart</h2>
            <p>
              "Deron Biles is a man after God's heart. In his book he wishes to
              challenge all men to find the transforming power of God's Word.
              Learn how to be God's man!"
              <br /> -Jim Richards, Executive Director,{' '}
            </p>
            <p>
              "In a day when the church has been largely overtaken by feminism
              together with its marginalization, either intentionally or by
              accident, of men, professor Deron Biles of Southwestern Seminary
              has written a superb assessment of what it means to be a 'man
              after God's own heart' in this volume Becoming the Man God is
              Seeking, Dr. Biles has presented a highly readable but profoundly
              thoughtful presentation that any man who loves God will want to
              read and make a part of his service to the Lord. If I were a
              pastor I would want every man in my church to have a copy of this
              book."
              <br /> -Paige Patterson President, Southwestern Baptist
              Theological Seminary
            </p>
          </div>
          <img
            className="book"
            src="https://images-na.ssl-images-amazon.com/images/I/41Zm54tcECL._SX322_BO1,204,203,200_.jpg"
            alt="After God's Heart"
          />
        </div>
        <div>
          <img
            className="book"
            src="http://csm-publishing.org/wp-content/uploads/2015/03/SEE_FA-194x300.jpg"
            alt="Seminary Education"
          />
          <div>
            <h2>Seminary Education By Extension</h2>
            <p>
              Technology has changed every facet of our lives. It is even
              changing the face of education (and sometimes for the better). We
              live in a day where information is considered EQUIVALENT to
              instruction; where the accumulation of data is misinterpreted as
              education. This is the consummate challenge of our time. And
              nowhere is this more significant than in theological education. We
              are the defenders of higher learning, critical thinking, spiritual
              heritage, and Biblical exegesis. It may be counter-cultural; it
              may be uncool; it may be antiquated; but it is the task with which
              we have been entrusted. And the impact of our success will imprint
              a generation!
            </p>
            <p>
              So, what is unique about an extension? Some maintain that
              Extension Centers are a dinosaur. That with the Internet and other
              technological advances, Extensions will become extinct. But, I
              maintain that the viability of our extensions will be directly
              related to how we handle the challenges before us. We control the
              fate of our work.
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  </div>
)

export default Library
