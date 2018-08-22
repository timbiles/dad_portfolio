import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Header />
            {routes}
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
