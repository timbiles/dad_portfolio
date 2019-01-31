import React, { Component } from 'react';
import axios from 'axios';

import MainAdmin from './MainAdmin';
import './Admin.scss';

class Admin extends Component {
  state = {
    main: false,
    err: false,
    username: '',
    password: ''
  };

  componentDidMount() {
    this.login();
  }

  login = () => {
    axios
      .get('/api/logged-in')
      .then(res => {
        this.setState({ main: true });
      })
      .catch(() => {
        console.log('Make sure to log in.');
      });
  };

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  submitAdmin = () => {
    const { username, password } = this.state;

    axios
      .put('/api/admin', { user: username, pass: password })
      .then(res => {
        this.setState({ main: true });
      })
      .catch(() => {
        this.setState({ err: true });
      });
  };

  render() {
    const { main, err } = this.state;

    return (
      <div className={!main ? 'admin1' : 'admin'}>
        {!main && (
          <div className="admin_login">
            <h1>Welcome Deron!</h1>
            <div>
              <p>Username</p>
              <input type="text" onChange={this.handleUsername} />
              <p>Password</p>
              <input type="password" onChange={this.handlePassword} />
            </div>
            <div>
              <h3 onClick={e => this.submitAdmin(e)}>Log In</h3>
            </div>
            {err && (
              <p className="invalid">
                **Invalid credentials. Please try again.
              </p>
            )}
          </div>
        )}
        {main && <MainAdmin />}
      </div>
    );
  }
}

export default Admin;
