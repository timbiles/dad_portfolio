import React, { Component } from 'react';

class ArticleList extends Component {
  state = {
    filtered: []
  };

  handleChange = e => {
    this.setState({ filtered: e.toLowerCase() });
  };
  render() {
    const articles = [
      {
        title:
          '10 Reasons to consider pursuiing a Doctor of Ministry (DMin)',
        img:
          'http://dailypastor.com/wp-content/uploads/2018/10/2018-10-29-consider-dmin.jpg',
        url:
          'http://dailypastor.com/consider-pursuing-a-doctor-of-ministry-dmin/',
        date: 'October 29, 2018',
        topic: '',
        desc:
          'People have often asked me, “What is a DMin and why should I pursue one?”  The Doctor of Ministry (DMin) is an advanced, professional degree designed for those already in ministry. The primary difference between a DMin and a Ph.D. is its focus.'
      },
      {
        title:
          'Preaching the Old Testament Prophets - Annotated Bibliography',
        img:
          '',
        url:
          'http://preachingsource.com/wp-content/uploads/2018/10/Preaching-Old-Testament-Prophets-Annotated-Bibliography.pdf',
        date: 'October 2018',
        topic: '',
        desc:
          'Are you looking to study Old Testament prophets? I have put together an annotated bibliography on some helpful resources in the field.  This is only one of many sources you can find to help you in your preaching on @preachingsource.'
      },
      {
        title:
          'The Narrative and Characterization: How Biblical Characters Inform the Meaning of a Text',
        img:
          'http://preachingsource.com/wp-content/uploads/2017/02/shutterstock_246986977.jpg',
        url:
          'http://preachingsource.com/blog/the-narrative-and-characterization-how-biblical-characters-inform-the-meaning-of-a-text/',
        date: 'September 7, 2018',
        topic: '2 Samuel',
        desc:
          'All of life is a story within a story.  Jaques in Shakespeare’s play, As you Like it, said it this way, “All the world’s a stage, and all the men and women merely players.”  At our best, you and I are merely a small part within a much larger drama.  The characters, roles, and scenes change, but the story moves on.'
      },
      {
        title: 'Remembering the Value of the Individual',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2017/06/20170612BartBarber006web.jpg',
        url:
          'https://theologicalmatters.com/2017/06/13/remembering-the-value-of-the-individual/',
        date: 'June 13, 2017',
        topic: 'Numbers · John · Acts',
        desc:
          'The Southern Baptist Convention begins meeting today (June 13). During the next two days, messengers representing 46,793 churches with 15.3 million members[1] will make important decisions, hear reports about our work, worship together, and fellowship.'
      },
      {
        title: 'Why I Love the Cooperative Program and Why You Should Too',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2015/09/A8bMC2gD4S-nN2rZ6pGXuuifED6XM5vuKvzsnJdyL2g1.jpg',
        url:
          'https://theologicalmatters.com/2015/09/08/why-i-love-the-cooperative-program-and-why-you-should-too/',
        date: 'September 8, 2015',
        topic: 'Acts',
        desc:
          'I am a product of the Cooperative Program (CP). [1] I admit it and am proud of it. I was reared in a home where my father’s salary came whole or in part from gifts through the CP; my first ministry experience as a summer missionary was paid through CP gifts; I received a scholarship to college through the CP; later, in seminary, I received a substantial tuition benefit from the CP;'
      },
      {
        title: 'Finishing Well',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2015/08/default_preach.jpg',
        url: 'https://theologicalmatters.com/2015/04/27/finishing-well/',
        date: 'April 27, 2015',
        topic: '2 Timothy · Colossians · Proverbs',
        desc:
          'It happens about this same time every semester: students work feverishly to complete assignments, and faculty work diligently to grade them. Procrastination is no longer your friend. It’s easy to complain about the load or bemoan the fact that you didn’t start yesterday, but neither of those contributes to the completion of the assignments we carry today.'
      },
      {
        title: 'Theological Tailgating',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/10/theological_tailgating.jpg',
        url:
          'https://theologicalmatters.com/2014/10/20/theological-tailgating/',
        date: 'October 20, 2014',
        topic: 'Romans · 1 Corinthians · Mark',
        desc:
          'You’ve seen them. They are the bumper bullies of the highway. Any day of the week, on any highway, and most any time of the day they are out there driving too fast, weaving in and out of lanes, and aggressively driving too close to the bumper of the car in front of them.'
      },
      {
        title: 'Worthy of Double Honor',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/04/Preaching_TheoMatters3.jpg',
        url:
          'https://theologicalmatters.com/2014/09/30/worthy-of-double-honor/',
        date: 'September 30, 2014',
        topic: '',
        desc:
          'With all due respect to Chuck Swindoll and Charles Stanley, whose works I highly recommend to you, there are three guys named Charles whose writings every Minister should know: Charles Spurgeon, Charles Jefferson, and Charles Bridges.  Along with Pope Gregory’s Pastoral Rule and Richard Baxter’s Reformed Pastor,'
      },
      {
        title: 'Pastors and Rookie Mistakes',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2014/08/young_pastors.jpg',
        url:
          'https://theologicalmatters.com/2014/08/25/pastors-and-rookie-mistakes/',
        date: 'August 25, 2014',
        topic: '',
        desc:
          'Recently, State Senator Tim Solobay of Pennsylvania introduced a bill (Senate Bill 391) for consideration that would make expungement possible for individuals who have committed crimes other than misdemeanors.  The proposal would “allow some individuals who have been convicted of misdemeanors'
      },
      {
        title: 'Functional Obedience',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/directions1.jpg',
        url: 'https://theologicalmatters.com/2014/07/28/functional-obedience/',
        date: 'July 28, 2014',
        topic: '',
        desc:
          'In her recent book, The Good News about Marriage: Debunking Discouraging Myths about Marriage and Divorce, Shaunti Feldhahn, a Harvard-trained researcher, confutes the widely held belief that the divorce rate among Christians is generally the same as that of non-Christians. Indeed, her eight-year investigative study,'
      },
      {
        title: 'Godless Churches',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url: 'https://theologicalmatters.com/2013/12/05/godless-churches/',
        date: 'December 5, 2013',
        topic: '',
        desc:
          'Recently, the New York Times ran an article citing scientific evidence that demonstrated that attending church is good for your health. The study revealed that people who regularly attend church, on average, live two to three years longer than non-attenders. This was one of a number of studies recently with similar results.'
      },
      {
        title: `On Being a Pastor's kid, Part Three`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/11/14/on-being-a-pastors-kid-part-three/',
        date: 'November 14, 2013',
        topic: '',
        desc:
          'I love pastor’s kids (PK’s). I loved being one, and I love having them. I don’t mind the term PK and still wear it with pride. So far in this brief series, the first article focused those who are not the parents of pastor’s kids, and the second article addressed those who are. In this last article, I want to talk about being a pastor’s kid.'
      },
      {
        title: `On Being a Pastor's kid, Part Two`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/10/18/on-being-a-pastors-kid-part-2/',
        date: 'October 18, 2013',
        topic: '',
        desc:
          'Without question, the foundation of “training up a child in the way he should go” begins in the home. Being a pastor and a parent is not more difficult than any other parent in society. Like all parents, pastors are responsible for laying the groundwork for the spiritual welfare of their children. '
      },
      {
        title: `On Being a Pastor's kid, Part One`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/boy_home_school1.jpg',
        url:
          'https://theologicalmatters.com/2013/09/12/on-being-a-pastors-kid-part-1/',
        date: 'September 12, 2013',
        topic: '',
        desc:
          'Being a pastor’s kid is no harder than being anyone else’s kid. It’s just different. For too long we’ve used the image of a fishbowl as though that’s a bad thing. I am a pastor’s kid, I am married to a pastor’s kid, reared four pastor’s kids, my oldest son is married to a pastor’s kid, another of my boys is engaged to a pastor’s kid, '
      },
      {
        title: 'We are the Body of Christ',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url:
          'https://theologicalmatters.com/2013/08/16/we-are-the-body-of-christ/',
        date: 'August 16, 2013',
        topic: '1 Corinthians · Ephesians · Colossians',
        // topic: ['1 Corinthians', 'Ephesians', 'Colossians'],
        
        desc:
          'Like many others, I have recently read and been blessed by Dr. Thom Rainer’s book, I am a Church Member. I’m convinced that Dr. Rainer has hit on a significant and timely issue. I am hopeful that his book will challenge believers around the world on the issue of church membership.'
      },
      {
        title: `Somebody's Poisoned the Water Hole!`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/07/11/somebodys-poisoned-the-water-hole/',
        date: 'July 11, 2013',
        topic: 'Ezekiel',
        desc:
          'Sometimes we are better at talking about something than actually doing it. Nowhere is this more evident than in the topic of leadership. Pass through any bookstore and you’ll find shelves of books on leadership, leadership principles, leadership keys, and leadership according to [fill in the blank].'
      },
      {
        title: 'The Good of the One vs. The Good of the Many',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url: 'https://theologicalmatters.com/2013/06/13/2517/',
        date: 'June 13, 2013',
        topic: 'Ezekiel',
        desc:
          'My kids are watching the new Star Trek movies. The most recent movie, Into Darkness, is currently in theaters. But those of you close to my age may remember the OLD Star Trek movies. The 1982 movie Wrath of Khan was famous for the phrase,'
      },
      {
        title: `The Ministry of a Shepherd: They Don't Need to Go Away`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/05/09/the-ministry-of-a-shepherd-they-dont-need-to-go-away/',
        date: 'May 9, 2013',
        topic: 'Ezekiel · Matthew · Mark',
        desc:
          'Matthew records an account during the ministry of Jesus that took place after the execution of John the Baptist. The Gospel accounts that after Jesus learned of those events, He withdrew to a deserted place alone. The people soon discovered where Jesus was, and a large crowd gathered on the north shore of the Sea'
      },
      {
        title: `The Ministry of a Shepherd: Let's Be Careful Out There`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/04/10/lets-be-careful-out-there/',
        date: 'April 10, 2013',
        topic: 'Ezekiel · Acts',
        desc:
          'Years ago, in the popular police television drama Hill Street Blues, every episode climaxed with Sergeant Esterhaus completing roll call with the admonition to his officers, “let’s be careful out there.” The phrase went that generations’ version of viral because it captured the stark'
      },
      {
        title: 'The Ministry of a Shepherd: Binding Up the Broken',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/03/13/the-ministry-of-a-shepherd-binding-up-the-broken/',
        date: 'March 13, 2013',
        topic: 'Ezekiel · Psalms · Hosea',
        desc:
          'My wife and I have four boys. One of the things you learn quickly with multiple males in the household is that the world is a dangerous place. Boys aren’t looking for beauty; they are looking for adventure. But with great adventure comes great risk. In our case, injuries were a somewhat common occurrence.'
      },
      {
        title: 'The Ministry of a Shepherd: Is there no balm in Gilead?',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2013/02/13/is-there-no-balm-in-gilead/',
        date: 'February 13, 2013',
        topic: 'Ezekiel',
        desc:
          'February is the month we like to talk about love. Valentines are written, gifts are exchanged, and vows are made. It is estimated that this year 36 million heart-shaped boxes of candy will be sold, 50 million roses will be given, 1 billion cards will be sent, and 8 billion candy hearts will be produced.'
      },
      {
        title: `Where's that bar of soap?`,
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/Naylor-web1.jpg',
        url:
          'https://theologicalmatters.com/2013/01/09/wheres-that-bar-of-soap/',
        date: 'January 9, 2013',
        topic: '',
        desc: `There really is no nice way to say this; we’ve gotten sloppy in our speaking habits. We’ve turned the other ear as profanity and vulgarity have overtaken our conversations and polluted the airwaves, and we’ve even grown numb to their offensiveness.`
      },
      {
        title: 'The Ministry of a Shepherd: In Weakness, Not Made Strong',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/Naylor-web1.jpg',
        url:
          'https://theologicalmatters.com/2012/12/12/in-weakness-not-made-strong/',
        date: 'December 12, 2012',
        topic: 'Ezekiel · Isaiah · Job',
        desc:
          'Scripture reveals the heart of the Heavenly Father for the vulnerable. He commands special care for those who are poor, sick, widowed, or distressed. Indeed, James suggested that the definition of pure and undefiled religion begins with visiting orphans and widows in their distress.'
      },
      {
        title: 'The Ministry of a Shepherd: Feed your Lamb. Feed it.',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2012/11/14/the-ministry-of-a-shepherd-feed-your-lamb-feed-it/',
        date: 'November 14, 2012',
        topic: 'Ezekiel · Judah · Ezra',
        desc:
          'I don’t always eat right. There, I said it. I should eat more vegetables and less Hot Tamales candy. In fact, I’m sure if I put my mind to it, I could come up with a much longer list of things that I should do … and maybe I should do that.'
      },
      {
        title: 'The Ministry of a Shepherd: Replacement Shepherds',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/MinistryofaShepherd1.jpg',
        url:
          'https://theologicalmatters.com/2012/10/10/the-ministry-of-a-shepherd-replacement-shepherds/',
        date: 'October 10, 2012',
        topic: 'Ezekiel · John',
        desc:
          'As sports fans, we’ve just come through one of the most intriguing experiences in recent years … Replacement Referees. As the drama of these “scab” referees began to unfold, we began to hear stories about the background of the men assuming those roles. Some came to the NFL '
      },
      {
        title: 'The Physiognomy of Ministry',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/church1.jpg',
        url:
          'https://theologicalmatters.com/2012/09/12/the-physiognomy-of-ministry/',
        date: 'September 12, 2012',
        topic: 'Matthew',
        desc:
          'I just recently finished a 60-day exercise regimen called Insanity. While, I wouldn’t say I have a beach body as the package advertises (which probably has more to do with the candidate than the program), I will confess that the program is certainly well named!'
      },
      {
        title: `There's Not an App for That`,
        img:
          'https://theologicalmatters.com/wp-content/themes/theologicalmatters/images/default_preach.jpg',
        url: 'https://theologicalmatters.com/2012/08/08/biles/',
        date: 'August 8, 2012',
        topic: '2 Chronicles · Exodus · Deuteronomy',
        desc:
          'We live in an app-crazy time. One of the favorite motto’s of this generation is, “there’s an app for that.” Indeed, there are apps for many things. Some of them are helpful. Others are just plain weird. For example, did you know that there is actually an ACME lie detector app? I’m not sure if there is a falling anvil involved.'
      },
      {
        title: 'Monopoly and the Game of Life',
        img:
          'https://theologicalmatters.com/wp-content/uploads/2013/11/go_monopoly.jpg1_.jpeg',
        url:
          'https://theologicalmatters.com/2012/04/27/monopoly-and-the-game-of-life/',
        date: 'April 27, 2012',
        topic: '1 Timothy · Titus',
        desc:
          'Not too long ago, one of our boys came home with a McDonald’s Monopoly game piece which promised that we were just one piece away from winning their grand prize. With his Park Place, we figured we were just Boardwalk away from retirement! Of course, us and 250 million other people who got Park Place,'
      },
      {
        title: 'The Lord called me to seminary ... Now what?',
        img:
          'https://theologicalmatters.com/wp-content/themes/theologicalmatters/images/default_preach.jpg',
        url:
          'https://theologicalmatters.com/2011/11/09/the-lord-called-me-to-seminary-now-what/',
        date: 'November 9, 2011',
        topic: 'Luke · Matthew',
        desc:
          'So, the Lord has called you to seminary. That’s great! You are joining a family that is built on a solid foundation of the truth of God’s Word that touches the world and impacts eternity. No doubt, you are here because God has called you into ministry.'
      }
    ];

    const { filtered } = this.state;

    const filter = articles
      .filter((e, i) => {
        return (
          e.title.toLowerCase().includes(filtered) ||
          (e.topic && e.topic.toLocaleLowerCase().includes(filtered))
        );
      })
      .map((e, i) => {
        if (!e.img) e.img = 'http://blog.lightstock.com/wp-content/uploads/2014/07/000015_Lightstock-16.jpg'
        return (
          <div key={i} className="article_list_map">
            <img className="article_img" src={e.img} alt={e.title} />
            <div className="alm_content">
              <a href={e.url} target="blank">
                <h2>{e.title}</h2>
              </a>
              <p>
                {e.desc && e.desc.substring(0, 200)}
                ...
              </p>
              <div className='alm_btm'>

              <p>{e.date}</p>
              <p>{e.topic}</p>
              </div>
            </div>
          </div>
        );
      });

    return this.props.type === 'main' ? (
      <div className="main_articles">
        <input
          type="text"
          onChange={e => this.handleChange(e.target.value)}
          placeholder="Search by Title or Book of the Bible..."
          className="article_search"
        />
        <div className="filter_content">{filter}</div>
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
