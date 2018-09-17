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
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      },
      {
        title: '',
        img: '',
        url: '',
        date: ''
      }
    ];
    return this.props.type === 'main' ? (
      <div>
        {articles.map((e, i) => {
          return (
            <div key={i} className="article_list_map">
              <a href={e.url}>
                <h2>{e.title}</h2>
              </a>
              <img src={e.img} alt={e.title} />
              <p>{e.date}</p>
            </div>
          );
        })}
      </div>
    ) : (
      <div className='article_wrapper'>
        {articles.splice(0, 3).map((e, i) => {
          return (
            <div key={i} className="article_top_map">
              <a href={e.url}>
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
