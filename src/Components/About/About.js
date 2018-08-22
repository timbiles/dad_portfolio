import React from 'react'

import './About.css'

const About = () => (
  <div className="about">
    <div className="bio_name">
      <div className="bio_name_sub">
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>

        <h1 className="about_name">About</h1>
        <div className="line_container">
          <div className="a_line" />
          <div className="a_line" />
        </div>
      </div>
      <div className="bio_sub">
        <p>
          Dean Emeritus of Southwestern Center for Extension Education
          <br /> Professor of Pastoral Ministries and Preaching
          <br /> Director of Professional Doctoral Studies, School of Theology
          and Preaching
        </p>
      </div>
    </div>

    <div className="about_container">
      <img
        className="profile_pic"
        src="https://theologicalmatters.com/wp-content/uploads/2017/07/headshot-tm-deronbiles.jpg"
        alt="Deron Profile"
      />
      <p>
        Dr. Deron J. Biles and his wife, Jaye, have four sons: Joshua, Timothy,
        Jonathan, and David. They also have four daughters-in-law and four
        grandchildren. Dr. Biles graduated from Howard Payne University in
        Brownwood in 1989 with a BA in Bible and History; received an MDivBL
        from Southwestern Seminary in 1992; and a Ph.D. from Southwestern in Old
        Testament in 1997.
      </p>
      <p>
        Dr. Biles served as a Pastor for 15 years. He has also served as Interim
        or Transitional Pastor in ten Churches.
      </p>
      <p>
        Dr. Biles is the author of The Ministry of a Shepherd, published by
        Broadman and Holman. He is also the author of After God's Heart:
        Becoming the Man God is Seeking along with its companion volume
        entitled, After God’s Heart: Becoming the Man God is Seeking. A
        Forty-Day Bible Study. He is the co-author of the book, Seminary
        Education by Extension: Process, Principles, and Practices. In addition,
        he has written or co-written manuals for Pastor Search Committees,
        making resumes, Interim Ministry, and Associational ministry.
      </p>
      <p>
        Dr. Biles served as the Minister/Church Relations Director for the
        Southern Baptists of Texas Convention before coming to Southwestern
        Baptist Theological Seminary as Dean of Extension Education and
        Associate Professor of Pastoral Theology in June 2006. In 2012, he also
        assumed the role of Associate Dean for the Doctor of Ministry Program.
      </p>
      <p>
        Dr. Biles currently serves as the Director of the Professional Doctoral
        Program in the School of Preaching and Professor of Pastoral Ministry
        and Preaching in the School of Theology and the School of Preaching.
      </p>
      <p>Dr. Biles and his wife reside in North Richland Hills, Texas.</p>
    </div>
    <div className='about_ed'>
      <h2>Education</h2>
      <p>
        Ph.D., Old Testament, Southwestern Baptist Theological Seminary, 1997{' '}
      </p>
      <p>M.Div., Southwestern Baptist Theological Seminary, 1992</p>
      <p>B.A., History and Bible, Howard Payne University, 1989</p>
    </div>
  </div>
)

export default About
