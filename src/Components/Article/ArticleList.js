import React, { Component } from 'react';

class ArticleList extends Component {
  render() {
    const articles = [
      {
        title: 'Remembering the Value of the Individual',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2017/06/20170612BartBarber006web.jpg',
        url:
          'https://theologicalmatters.com/2017/06/13/remembering-the-value-of-the-individual/',
        date: 'June 13, 2017'
      },
      {
        title: 'Why I Love the Cooperative Program and Why You Should Too',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2015/09/A8bMC2gD4S-nN2rZ6pGXuuifED6XM5vuKvzsnJdyL2g1.jpg',
        url:
          'https://theologicalmatters.com/2015/09/08/why-i-love-the-cooperative-program-and-why-you-should-too/',
        date: 'September 8, 2015'
      },
      {
        title: 'Finishing Well',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2015/08/default_preach.jpg',
        url: 'https://theologicalmatters.com/2015/04/27/finishing-well/',
        date: 'April 27, 2015'
      },
      {
        title: 'Theological Tailgating',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/10/theological_tailgating.jpg',
        url:
          'https://theologicalmatters.com/2014/10/20/theological-tailgating/',
        date: 'October 20, 2014'
      },
      {
        title: 'Worthy of Double Honor',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/04/Preaching_TheoMatters3.jpg',
        url:
          'https://theologicalmatters.com/2014/09/30/worthy-of-double-honor/',
        date: 'September 30, 2014'
      },
      {
        title: 'Pastors and Rookie Mistakes',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/08/young_pastors.jpg',
        url:
          'https://theologicalmatters.com/2014/08/25/pastors-and-rookie-mistakes/',
        date: 'August 25, 2014'
      },
      {
        title: 'Functional Obedience',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/directions1.jpg',
        url: 'https://theologicalmatters.com/2014/07/28/functional-obedience/',
        date: 'July 28, 2014'
      },
      {
        title: 'Godless Churches',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url: 'https://theologicalmatters.com/2013/12/05/godless-churches/',
        date: 'December 5, 2013'
      },
      {
        title: `On Being a Pastor's kid, Part Three`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/11/14/on-being-a-pastors-kid-part-three/',
        date: 'November 14, 2013'
      },
      {
        title: `On Being a Pastor's kid, Part Two`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/10/18/on-being-a-pastors-kid-part-2/',
        date: 'October 18, 2013'
      },
      {
        title: `On Being a Pastor's kid, Part One`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/09/12/on-being-a-pastors-kid-part-1/',
        date: 'September 12, 2013'
      },
      {
        title: 'We are the Body of Christ',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url:
          'https://theologicalmatters.com/2013/08/16/we-are-the-body-of-christ/',
        date: 'August 16, 2013'
      },
      {
        title: `Somebody's Poisoned the Water Hole!`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/07/11/somebodys-poisoned-the-water-hole/',
        date: 'July 11, 2013'
      },
      {
        title: 'The Good of the One vs. The Good of the Many',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url: 'https://theologicalmatters.com/2013/06/13/2517/',
        date: 'June 13, 2013'
      },
      {
        title: `The Ministry of a Shepherd: They Don't Need to Go Away`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/05/09/the-ministry-of-a-shepherd-they-dont-need-to-go-away/',
        date: 'May 9, 2013'
      },
      {
        title: `The Ministry of a Shepherd: Let's Be Careful Out There`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/04/10/lets-be-careful-out-there/',
        date: 'April 10, 2013'
      },
      {
        title: 'The Ministry of a Shepherd: Binding Up the Broken',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/03/13/the-ministry-of-a-shepherd-binding-up-the-broken/',
        date: 'March 13, 2013'
      },
      {
        title: 'The Ministry of a Shepherd: Is there no balm in Gilead?',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/02/13/is-there-no-balm-in-gilead/',
        date: 'February 13, 2013'
      },
      {
        title: `Where's that bar of soap?`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/Naylor-web1.jpg',
        url:
          'https://theologicalmatters.com/2013/01/09/wheres-that-bar-of-soap/',
        date: 'January 9, 2013'
      },
      {
        title: 'The Ministry of a Shepherd: In Weakness, Not Made Strong',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/Naylor-web1.jpg',
        url:
          'https://theologicalmatters.com/2012/12/12/in-weakness-not-made-strong/',
        date: 'December 12, 2012'
      },
      {
        title: 'The Ministry of a Shepherd: Feed your Lamb. Feed it.',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2012/11/14/the-ministry-of-a-shepherd-feed-your-lamb-feed-it/',
        date: 'November 14, 2012'
      },
      {
        title: 'The Ministry of a Shepherd: Replacement Shepherds',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2012/10/10/the-ministry-of-a-shepherd-replacement-shepherds/',
        date: 'October 10, 2012'
      },
      {
        title: 'The Physiognomy of Ministry',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url:
          'https://theologicalmatters.com/2012/09/12/the-physiognomy-of-ministry/',
        date: 'September 12, 2012'
      },
      {
        title: `There's Not an App for That`,
        img:
          'https://theologicalmatters.com/wp-content/themes/theologicalmatters/images/default_preach.jpg',
        url: 'https://theologicalmatters.com/2012/08/08/biles/',
        date: 'August 8, 2012'
      },
      {
        title: 'Monopoly and the Game of Life',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/go_monopoly.jpg1_.jpeg',
        url:
          'https://theologicalmatters.com/2012/04/27/monopoly-and-the-game-of-life/',
        date: 'April 27, 2012'
      },
      {
        title: 'The Lord called me to seminary ... Now what?',
        img:
          'https://theologicalmatters.com/wp-content/themes/theologicalmatters/images/default_preach.jpg',
        url:
          'https://theologicalmatters.com/2011/11/09/the-lord-called-me-to-seminary-now-what/',
        date: 'November 9, 2011'
      }
    ];
    return this.props.type === 'main' ? (
      <div className="main_articles">
        {articles.map((e, i) => {
          return (
            <div key={i} className="article_list_map">
              <div className="alm_content">
                <a href={e.url} target="blank">
                  <h2>{e.title}</h2>
                </a>
                <p>{e.date}</p>
              </div>
              <img className='article_img'src={e.img} alt={e.title} />
            </div>
          );
        })}
      </div>
    ) : (
      <div className="article_wrapper">
        {articles.splice(0, 3).map((e, i) => {
          return (
            <div key={i} className="article_top_map">
              <a href={e.url} target="blank">
                <h2>{e.title}</h2>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
