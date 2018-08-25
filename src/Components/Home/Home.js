import React from 'react';

import './Home.css';

const IndexPage = () => (
  <div>
    <div className="home_img" />
    <body className="home_container">
      <h1>Preach the Word</h1>
    </body>
    <footer className="home_sub">
      <div>
        <h3>Connect with Dr. Biles</h3>
      </div>
      <div>
        <h3>Follow me on...</h3>
      </div>
      <div>
        <h3>Calendar</h3>
        <iframe

            className="calendar"
            frameBorder="0"
            scrolling="no"
            title="Deron Calendar"
          />
      </div>
    </footer>
  </div>
);

export default IndexPage;
