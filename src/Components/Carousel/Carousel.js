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
      totalSlides={18}
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
        <Slide index={6}>
        <a target='blank' href="https://theologicalmatters.com/2014/07/28/functional-obedience/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/directions1.jpg"
            alt="Article 7"
          />
          </a>
          <h4>Functional Obedience</h4>
        </Slide>
        <Slide index={7}>
        <a target='blank' href="https://theologicalmatters.com/2013/12/05/godless-churches/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg"
            alt="Article 8"
          />
          </a>
          <h4>Godless Churches</h4>
        </Slide>
        <Slide index={8}>
        <a target='blank' href="https://theologicalmatters.com/2013/11/14/on-being-a-pastors-kid-part-three/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg"
            alt="Article 9"
          />
          </a>
          <h4>On Being a Pastor's kid, Part Three</h4>
        </Slide>
        <Slide index={9}>
        <a target='blank' href="https://theologicalmatters.com/2013/10/18/on-being-a-pastors-kid-part-2/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg"
            alt="Article 10"
          />
          </a>
          <h4>On Being a Pastor's kid, Part Two</h4>
        </Slide>
        <Slide index={10}>
        <a target='blank' href="https://theologicalmatters.com/2013/09/12/on-being-a-pastors-kid-part-1/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg"
            alt="Article 11"
          />
          </a>
          <h4>On Being a Pastor's kid, Part One</h4>
        </Slide>
        <Slide index={11}>
        <a target='blank' href="https://theologicalmatters.com/2013/08/16/we-are-the-body-of-christ/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg"
            alt="Article 12"
          />
          </a>
          <h4>We are the Body of Christ</h4>
        </Slide>
        <Slide index={12}>
        <a target='blank' href="https://theologicalmatters.com/2013/07/11/somebodys-poisoned-the-water-hole/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 13"
          />
          </a>
          <h4>Somebody's Poisoned the Water Hole!</h4>
        </Slide>
        <Slide index={13}>
        <a target='blank' href="https://theologicalmatters.com/2013/06/13/2517/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 14"
          />
          </a>
          <h4>The Good of the One vs. The Good of the Many</h4>
        </Slide>
        <Slide index={14}>
        <a target='blank' href="https://theologicalmatters.com/2013/05/09/the-ministry-of-a-shepherd-they-dont-need-to-go-away/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 15"
          />
          </a>
          <h4>The Ministry of a Shepherd: They Don't Need to Go Away</h4>
        </Slide>
        <Slide index={15}>
        <a target='blank' href="https://theologicalmatters.com/2013/04/10/lets-be-careful-out-there/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 16"
          />
          </a>
          <h4>The Ministry of a Shepherd: Let's Be Careful Out There</h4>
        </Slide>
        <Slide index={16}>
        <a target='blank' href="https://theologicalmatters.com/2013/03/13/the-ministry-of-a-shepherd-binding-up-the-broken/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 17"
          />
          </a>
          <h4>The Ministry of a Shepherd: Binding Up the Broken</h4>
        </Slide>
         <Slide index={17}>
        <a target='blank' href="https://theologicalmatters.com/2013/02/13/is-there-no-balm-in-gilead/">
        
          <img
            src="https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg"
            alt="Article 18"
          />
          </a>
          <h4>The Ministry of a Shepherd: Is there no balm in Gilead?</h4>
        </Slide>
        {/* <Slide index={}>
        <a target='blank' href="">
        
          <img
            src=""
            alt="Article "
          />
          </a>
          <h4></h4>
        </Slide> */}


      </Slider>
      <div className="lib_btns">
        <ButtonBack className="lib_btn">Back</ButtonBack>
        <ButtonNext className="lib_btn">Next</ButtonNext>
      </div>
    </CarouselProvider>
  </div>
)
