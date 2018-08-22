import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Library from './Components/Library/Library';
import Form from './Components/Form/Form';

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/library" component={Library} />
    <Route path="/contact" component={Contact} />   
    <Route path="/form" component={Form} />   
    
    <Route path="/" component={Home} />
  </Switch>
);
