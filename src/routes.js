import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import About from './Components/About/About';
import Admin from './Components/Admin/Admin';
import Article from './Components/Article/Article';
import Blog from './Components/Blog/Blog';
import CreateBlog from './Components/Blog/CreateBlog';
import Book from './Components/Book/Book';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import Library from './Components/Library/Library';
import Requests from './Components/Requests/Requests';
import Resources from './Components/Resources/Resources';

class Routes extends Component {
  state = {
    user: ''
  };
  componentDidMount() {
    this.login();
  }

  login = () => {
    axios
      .get('/api/logged-in')
      .then(res => {
        this.setState({ user: res.data.username });
      })
      .catch(() => {
        console.log('Make sure to log in.');
      });
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/admin" component={Admin} />
          <Route path="/article" component={Article} />
          <Route path="/books/:title" component={Book} />
          {/* {(user && user) === process.env.REACT_APP_USER && (
            <Route exact path="/createblog" component={CreateBlog} />
          )} */}
            <Route exact path="/createblog" component={CreateBlog} />          
          <Route path="/blog/:title" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/library" component={Library} />
          <Route path="/form" component={Form} />
          <Route path="/resources" component={Resources} />
          <Route path="/requests/:id" component={Requests} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
