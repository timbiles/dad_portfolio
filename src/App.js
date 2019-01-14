import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import scroll from './Components/Utils/Func/scrollFade';

import store from './ducks/store';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {

  state = {
    menu: false,
    navClass: false,
    hidden: false
  }

  componentDidMount(){
    scroll()
  }

  navigation = e => {
    const id = e.target.id

    if (id === 'h1' || id === 'h2' || id === 'h3' || id === 'h4') {
      this.setState({ menu: true});
    } else if (e.target.id !== 'hamburger') {
      this.setState({navClass: true}, () => {
        setTimeout( () => {
          this.setState({menu: false, navClass: false})          
        }, 700)
      })
  }
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App" onClick={this.navigation}>
            <Header menu={this.state.menu} navClass={this.state.navClass} hidden={this.state.hidden}/>
            {routes}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
