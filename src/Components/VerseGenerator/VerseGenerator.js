import React, { Component } from 'react';

import './VerseGenerator.css';

export default class VerseGenerator extends Component {
  render() {
    const page = ['/about', 'book', '/library', '/article', '/blog', '/contact'];
    const items = [
      `"For Ezra had prepared his heart to seek the Law of the Lord, and to do it, and to teach statutes and ordinances in Israel." - Ezra 7:10`,
      `"Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15`,
      `"But as for you, stand here by Me, and I will speak to you all the commandments, the statutes, and the judgments which you shall teach them, that they may observe them in the land which I am giving them to possess." - Deuteronomy 5:31`,
      `"And of His fullness we have all received, and grace for grace." - John 1:16`,
      `"So then faith comes by hearing, and hearing by the word of God." - Romans 10:17`,
      `"If the ax is dull, and one does not sharpen the edge, then he must use more strength; But wisdom brings success." - Ecclesiastes 10:10`,
      `"Trust in the Lord with all your heart, and lean not on your own understanding; In all your ways acknowledge Him, and He shall direct your paths." - Proverbs 3: 5-6`
    ];

    let item;
    let url = window.location.pathname
    for(let i=0; i<page.length; i++){
      if(url.includes(page[i])){
        item = items[i]
      }
    }

    return <div className="verse">{item}</div>;
  }
}
