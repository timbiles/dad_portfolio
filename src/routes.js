import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from './utils/constants/routes';

export default (
  <Switch>
    <Route path="/about" component={ROUTES.About} />
    <Route path="/admin" component={ROUTES.Admin} />
    <Route path="/article" component={ROUTES.Article} />
    <Route path="/books/:title" component={ROUTES.Book} />
    <Route path="/blog/:title" component={ROUTES.Blog} />
    <Route path="/contact" component={ROUTES.Contact} />
    <Route exact path="/createblog" component={ROUTES.CreateBlog} />
    <Route path="/library" component={ROUTES.Library} />
    <Route path="/form" component={ROUTES.Form} />
    <Route path="/resources" component={ROUTES.Resources} />
    <Route path="/requests/:id" component={ROUTES.Requests} />
    <Route exact path="/" component={ROUTES.Home} />
  </Switch>
);
