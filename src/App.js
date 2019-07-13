import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
import scroll from './Components/Tools/Func/scrollFade';

import store from './ducks/store';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
    menu: false,
    navClass: false
  };

  componentDidMount() {
    scroll();
  }

  navigation = e => {
    const { menu } = this.state;
    const id = e.target.id;
    if (id === 'h1') {
      if (menu) {
        this.setState({ navClass: true }, () => {
          setTimeout(() => {
            this.setState({ menu: false, navClass: false });
          }, 700);
        });
      } else if (menu === false) {
        this.setState({ menu: true });
      }
    } else if (e.target.id !== 'hamburger') {
      if (menu) {
        this.setState({ navClass: true }, () => {
          setTimeout(() => {
            this.setState({ menu: false, navClass: false });
          }, 700);
        });
      }
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" onClick={this.navigation}>
            <Header menu={this.state.menu} navClass={this.state.navClass} />
            {routes}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
