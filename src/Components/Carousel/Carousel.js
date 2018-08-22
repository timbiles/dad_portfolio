import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import '../Library/Library.css';

export default () => (
  <div className="library_carousel">
    <h2>Theology Matters Articles</h2>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={6}
      interval={4000}
      // isPlaying={true}
    >
      <Slider>
        <Slide index={0}>
          <a
            target="blank"
            href="https://theologicalmatters.com/2017/06/13/remembering-the-value-of-the-individual/"
          >
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2017/06/20170612BartBarber006web.jpg"
              alt="Article 1"
            />
          </a>
          <h4>Remembering the Value of the Individual</h4>
        </Slide>
        <Slide index={1}>
          <a
            target="blank"
            href="https://theologicalmatters.com/2015/09/08/why-i-love-the-cooperative-program-and-why-you-should-too/"
          >
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2015/09/A8bMC2gD4S-nN2rZ6pGXuuifED6XM5vuKvzsnJdyL2g1.jpg"
              alt="Article 2"
            />
          </a>
          <h4>Why I Love the Cooperative Program and Why You Should Too</h4>
        </Slide>
        <Slide index={2}>
          <a
            target="blank"
            href="https://theologicalmatters.com/2015/04/27/finishing-well/"
          >
            <img
              src="https://theologicalmatters.com/wp-content/uploads/2015/08/default_preach.jpg"
              alt="Article 3"
            />
          </a>
          <h4>Finishing Well</h4>
        </Slide>
        <Slide index={3}>
        <a target='blank' href="https://theologicalmatters.com/2014/10/20/theological-tailgating/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2014/10/theological_tailgating.jpg"
            alt="Article 4"
          />
        </a>
          <h4>Theological Tailgating</h4>
        </Slide>
        <Slide index={4}>
        <a target='blank' href="https://theologicalmatters.com/2014/09/30/worthy-of-double-honor/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2014/04/Preaching_TheoMatters3.jpg"
            alt="Article 5"
          />
          </a>
          <h4>Worthy of Double Honor</h4>
        </Slide>
        <Slide index={5}>
        <a target='blank' href="https://theologicalmatters.com/2014/08/25/pastors-and-rookie-mistakes/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2014/08/young_pastors.jpg"
            alt="Article 6"
          />
          </a>
          <h4>Pastors and Rookie Mistakes</h4>
        </Slide>
      </Slider>
      <div className="lib_btns">
        <ButtonBack className="lib_btn">Back</ButtonBack>
        <ButtonNext className="lib_btn">Next</ButtonNext>
      </div>
    </CarouselProvider>
  </div>
)
