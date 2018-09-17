import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import './Carousel.css';

export default class NewCarousel extends Component {
  render() {
    return (
      <div className="lib_carousel">
        <Carousel 
            width="50%"
            autoplay={true}
            autoplayinterval='3000'
        >
          <a
            target="blank"
            href="https://theologicalmatters.com/2017/06/13/remembering-the-value-of-the-individual/"
          >
            <h2></h2>
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2017/06/20170612BartBarber006web.jpg"
              alt="Article 1"
            />
          </a>
          <a
            target="blank"
            href="https://theologicalmatters.com/2015/09/08/why-i-love-the-cooperative-program-and-why-you-should-too/"
          >
            <h2>Why I Love the Cooperative Program and Why You Should Too</h2>
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2015/09/A8bMC2gD4S-nN2rZ6pGXuuifED6XM5vuKvzsnJdyL2g1.jpg"
              alt="Article 2"
            />
          </a>
          <a
            target="blank"
            href="https://theologicalmatters.com/2015/04/27/finishing-well/"
          >
            <h2>Finishing Well</h2>
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2015/08/default_preach.jpg"
              alt="Article 3"
            />
          </a>
          <a
            target="blank"
            href="https://theologicalmatters.com/2014/10/20/theological-tailgating/"
          >
            <h2>Theological Tailgating</h2>
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2014/10/theological_tailgating.jpg"
              alt="Article 4"
            />
          </a>
          <a
            target="blank"
            href="https://theologicalmatters.com/2014/09/30/worthy-of-double-honor/"
          >
            <h2>Worthy of Double Honor</h2>
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2014/04/Preaching_TheoMatters3.jpg"
              alt="Article 5"
            />
          </a>
        </Carousel>
      </div>
    );
  }
}
