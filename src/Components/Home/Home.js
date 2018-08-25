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
          src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23F6F6F6&amp;src=nu9003si3didpe9sa7s242tucs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FChicago"
          className='calendar'
          frameborder="0"
          scrolling="no"
        />
      
      </div>
    </footer>
  </div>
);

export default IndexPage;
