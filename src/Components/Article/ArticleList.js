import React, { Component } from 'react';
import axios from 'axios';

class ArticleList extends Component {
  state = {
    filtered: [],
    articles: []
  };

  componentDidMount(){
    axios.get('/api/articles').then(res=> {
      this.setState({articles: res.data})
    })
  }

  handleChange = e => {
    this.setState({ filtered: e.toLowerCase() });
  };
  render() {
   

    const { filtered, articles } = this.state;

    const filter = articles
      .filter((e, i) => {
        return (
          e.title.toLowerCase().includes(filtered) ||
          (e.topic && e.topic.toLocaleLowerCase().includes(filtered))
        );
      })
      .map((e, i) => {
        if (!e.img) e.img = 'https://images.pexels.com/photos/250609/pexels-photo-250609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        return (
          <div key={i} className="article_list_map">
            <img className="article_img" src={e.img} alt={e.title} />
            <div className="alm_content">
              <a href={e.url} target="blank">
                <h2>{e.title}</h2>
              </a>
              <p>
                {e.description && e.description.substring(0, 200)}
                ...
              </p>
              <div className='alm_btm'>

              <p>{e.date}</p>
              <p>{e.topic && e.topic.replace(/,/g, ' · ')}</p>
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
