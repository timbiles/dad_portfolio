import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Library from './Components/Library/Library';
import Form from './Components/Form/Form';
import Admin from './Components/Admin/Admin';
import Requests from './Components/Requests/Requests';
import Resources from './Components/Resources/Resources';

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/library" component={Library} />
    <Route path="/contact" component={Contact} />   
    <Route path="/form" component={Form} />   
    <Route path="/admin" component={Admin} />  
    <Route path="/resources" component={Resources} />    
    <Route path="/requests" component={Requests} />                    
    <Route path="/" component={Home} />
  </Switch>
);
