import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';

class ArticleList extends Component {
  state = {
    filtered: [],
    articles: [],
    pagination: [],
    paginatedStart: 0,
    paginatedEnd: 10,
    paginatedClass: 1
  };

  async componentDidMount() {
    await this.getArticles();
    await setTimeout(() => {
      this.setPagination();
    }, 250);
  }

  getArticles = () => {
    axios.get('/api/articles').then(res => {
      this.setState({ articles: res.data });
    });
  };

  setPagination = () => {
    let tempArr = [];
    let count = 1;
    for (let i = 0; i < this.state.articles.length; i += 10) {
      tempArr.push(count);
      count += 1;
    }
    this.setState({ pagination: tempArr });
  };

  paginatedNumber = page => {
    const end = page * 10;
    this.setState({
      paginatedStart: end - 10,
      paginatedEnd: end,
      paginatedClass: page
    });
  };

  paginatedPrevious = () => {
    const { paginatedStart, paginatedEnd, paginatedClass } = this.state;
    this.setState({
      paginatedStart: paginatedStart - 10,
      paginatedEnd: paginatedEnd - 10,
      paginatedClass: paginatedClass - 1
    });
  };

  paginatedNext = () => {
    const { paginatedStart, paginatedEnd, paginatedClass } = this.state;
    this.setState({
      paginatedStart: paginatedStart + 10,
      paginatedEnd: paginatedEnd + 10,
      paginatedClass: paginatedClass + 1
    });
  };

  handleChange = e => {
    this.setState({ filtered: e.toLowerCase() });
  };

  // delete article
  deleteArticle = article => {
    swal({
      position: 'top-end',
      type: 'warning',
      title: 'Removing this article is permanent.',
      text: `Are you sure you want to remove article: "${article.title}"?`,
      confirmButtonText: 'Yes, remove it!',
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Deleted',
          text: 'Your Article has been deleted!',
          showConfirmButton: false,
          timer: 1500
        });
        axios
          .delete(`/api/remove-article/${article.id}`)
          .then(() => {
            this.getArticles();
          })

          .catch(() => {
            swal({
              position: 'top-end',
              type: 'warning',
              title: 'Ooops! There was an error.'
            });
          });
      } else if (res.dismiss === swal.DismissReason.cancel) {
        swal('Cancelled', 'Your Event is still here :)', 'error');
      }
    });
  };

  render() {
    const {
      filtered,
      articles,
      paginatedStart,
      paginatedEnd,
      pagination,
      paginatedClass
    } = this.state;

    const filter = articles
      .filter((e, i) => {
        return (
          e.title.toLowerCase().includes(filtered) ||
          (e.topic && e.topic.toLocaleLowerCase().includes(filtered))
        );
      })
      .map((e, i) => {
        if (e.blog) {
          e.newTitle = encodeURIComponent(e.title.trim());
        }
        const desc =
          e.description &&
          e.description
            .replace(/<b>/gi, '')
            .replace(/<\/b>/gi, '')
            .replace(/<em>/gi, '')
            .replace(/<\/em>/gi, '')
            .replace(/<u>/gi, '')
            .replace(/<\/u>/gi, '')
            .replace(/<h1>/gi, '')
            .replace(/<\/h1>/gi, '')
            .replace(/<center>/gi, '')
            .replace(/<\/center>/gi, '');

        return (
          <div key={i} className="article_list_map">
            <img className="article_img" src={e.img} alt={e.title} />
            <div className="alm_content">
              {e.blog ? (
                <Link to={`/blog/${e.newTitle}`}>
                  <h2>{e.title}</h2>
                </Link>
              ) : (
                <a href={e.url} target="blank">
                  <h2>{e.title}</h2>
                </a>
              )}
              <p>
                {desc.substring(0, 200)}
                ...
              </p>
              <div className="alm_btm">
                <p>{e.date}</p>
                <p>{e.topic && e.topic.replace(/,/g, ' · ')}</p>
              </div>
            </div>
          </div>
        );
      });

    switch (this.props.type) {
      case 'main':
        return (
          <div className="main_articles">
            <input
              type="text"
              onChange={e => this.handleChange(e.target.value)}
              placeholder="Search by Title or Book of the Bible..."
              className="article_search"
            />
            <div className="filter_content">{filter}</div>
          </div>
        );
      case 'admin':
        return (
          <div className="article_wrapper admin-article-wrapper">
            {articles.slice(paginatedStart, paginatedEnd).map((e, i) => {
              return (
                <div key={i} className="article_top_map admin-article-map">
                  <a href={e.url} target="blank">
                    <h2>{e.title}</h2>
                  </a>

                  <button onClick={() => this.deleteArticle(e)}>Delete</button>
                </div>
              );
            })}
            <section className="admin-pagination">
              <button
                onClick={this.paginatedPrevious}
                disabled={paginatedStart === 0}
              >
                previous
              </button>
              {pagination.map(page => (
                <div
                  key={page}
                  className={
                    paginatedClass === page ? 'paginated-active' : null
                  }
                  onClick={() => this.paginatedNumber(page)}
                >
                  {page}
                </div>
              ))}
              <button
                onClick={this.paginatedNext}
                disabled={articles.length < paginatedEnd}
              >
                Next
              </button>
            </section>
          </div>
        );
      default:
        return (
          <div className="article_wrapper">
            {articles.slice(0, 3).map((e, i) => {
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

    // return this.props.type === 'main' ? (
    //   <div className="main_articles">
    //     <input
    //       type="text"
    //       onChange={e => this.handleChange(e.target.value)}
    //       placeholder="Search by Title or Book of the Bible..."
    //       className="article_search"
    //     />
    //     <div className="filter_content">{filter}</div>
    //   </div>
    // ) : (
    //   <div className="article_wrapper">
    //     {articles.slice(0, 3).map((e, i) => {
    //       return (
    //         <div key={i} className="article_top_map">
    //           <a href={e.url} target="blank">
    //             <h2>{e.title}</h2>
    //           </a>
    //         </div>
    //       );
    //     })}
    //   </div>
    // );
  }
}

export default ArticleList;
