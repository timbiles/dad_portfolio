import React from 'react';

import Carousel from '../Carousel/Carousel';
import Verse from '../VerseGenerator/VerseGenerator';
import './Library.css';

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
          <div className="portfolio_book">
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
          <img
            className="book"
            src="https://images-na.ssl-images-amazon.com/images/I/41Zm54tcECL._SX322_BO1,204,203,200_.jpg"
            alt="After God's Heart"
          />
          <div className="portfolio_book">
            <h2>After God's Heart</h2>
            <p>
              "Deron Biles is a man after God's heart. In his book he wishes to
              challenge all men to find the transforming power of God's Word.
              Learn how to be God's man!"
              <br /> -Jim Richards, Executive Director
            </p>
          </div>
        </div>
        <div>
          <img
            className="book"
            src="http://csm-publishing.org/wp-content/uploads/2015/03/SEE_FA-194x300.jpg"
            alt="Seminary Education"
          />
          <div className="portfolio_book">
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
      <div className="resources_bottom">
        <div>
          <Carousel />
        </div>
      </div>
      <div className="chapel_sermons">
        <div className="chapel_sermons_sub cs1">
          <h2>SWBTS Chapel Sermons</h2>
          <div>
            <a
              target="_blank"
              rel='noreferrer noopener'
              href="http://preachingsource.com/sermon/how-will-you-be-remembered/"
            >
              How will you be remembered?
            </a>
            <div className="chapel_sub">
              <img
                className="chapel_img"
                src="http://cdn1.swbts.edu/media/2014/10/10-29-14_DeronBiles72_NW_2137.jpg"
                alt="Chapel 1"
              />
              <p>October 29, 2014</p>
            </div>
          </div>
          <div>
            <a 
            target='_blank'           
            rel='noreferrer noopener' 
            href="http://preachingsource.com/sermon/choosing-gods-way/">
              Choosing God's way
            </a>
            <div className="chapel_sub">
              <img
                className="chapel_img"
                src="http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg"
                alt="Chapel 2"
              />
              <p>April 13, 2017</p>
            </div>
          </div>
          <div>
            <a 
            target='_blank'   
            rel='noreferrer noopener'         
            href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2008/">
              Ezekiel Sermon
            </a>
            <div className="chapel_sub">
              <img
                className="chapel_img"
                src="https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/21014185_10155431459670661_5619186887203882438_o.jpg?_nc_cat=0&oh=ba3efcb8348927471d0652f883d2eff7&oe=5BF39DBE"
                alt="Chapel 2"
              />
              <p>October 14, 2008</p>
            </div>
          </div>
          <div>
            <a 
            target='_blank'   
            rel='noreferrer noopener'         
            href="http://preachingsource.com/sermon/swbts-chapel-deron-biles-2006/">
              Ezra Sermon
            </a>
            <div className="chapel_sub">
              <img
                className="chapel_img"
                src="http://cdn1.swbts.edu/media/2017/5/20170413DeronBiles024Web.jpg"
                alt="Chapel 2"
              />
              <p>November 14, 2006</p>
            </div>
          </div>
        </div>
        <div className="chapel_sermons_sub">
          <h2>Preaching Source</h2>
          <div className="chapel_sub1">
            <img
              className="preaching_source"
              src="http://preachingsource.com/wp-content/uploads/2016/08/Genesis.jpg"
              alt="Genesis"
            />
            <a 
            target='_blank'
            rel='noreferrer noopener'
            href="http://preachingsource.com/sermon-structures/genesis-sermon-structures/">
              Genesis Sermon Structures
            </a>
            <a 
            target='_blank'
            rel='noreferrer noopener'
            href="http://preachingsource.com/sermon-starter/genesis-sermon-starter/">
              Genesis Sermon Starter
            </a>
            <p>
              The Genesis Sermon Structures were written by Dr. Deron Biles.
            </p>
          </div>
        </div>
      </div>
      <Verse />
    </div>
  </div>
);

export default Library;
