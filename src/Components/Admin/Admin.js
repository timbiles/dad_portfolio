import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Calendar from '../Calendar/Calendar';
import './Admin.css';

import {
  updateEvent,
  updateDate,
  updateLocation
} from '../../ducks/eventsReducer';

import { getRequests } from '../../ducks/requestReducer';

class Admin extends Component {
  state = {
    pass: true,
    main: false,
    username: '',
    password: ''
  };
  componentDidMount() {
    this.props.getRequests();
  }

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  submitAdmin = e => {
    const { username, password } = this.state;

    username === process.env.REACT_APP_LOGIN &&
      password === process.env.REACT_APP_PASSWORD &&
      this.setState({ pass: false, main: true });
  };

  handleClick = e => {
    const { event, date, location } = this.props.eventReducer;
    axios.post('/api/add-to-calendar', {
      event,
      date,
      location
    });
  };
  render() {
    const { updateEvent, updateDate, updateLocation } = this.props;
    const { requests } = this.props.reducer;
    const { pass, main, username, password } = this.state;

    const map = requests.map(e => {
      return (
        <Link key={e.id} className="admin_link" to={`/requests/${e.id}`}>
          <div className="requests_map" key={e.id}>
            <h5>{e.organization_name}</h5>
            <p>{e.contact_name}</p>
          </div>
        </Link>
      );
    });

    return (
      <div className="admin">
        {pass && (
          <div className="admin_login">
          <h1>Welcome Deron!</h1>
          <div>

            <input type="text" onChange={this.handleUsername} />
            <input type="password" onChange={this.handlePassword} />
          </div>
            <div>
              <h3 onClick={e => this.submitAdmin(e)}>Submit</h3>
            </div>
          </div>
        )}
        {main && (
          <div className="admin_main">
            <div className="admin_main_sub">
              <h1>Welcome, Deron!</h1>
              <div>
                <div className="admin_sub1">
                  <h2>Incoming Requests</h2>
                  <div className="admin_map">{map}</div>
                </div>
                <div className="admin_sub1">
                  <h2>Create New Event</h2>
                  <div className="events_input">
                    <div>
                      <h2>Event Name</h2>
                      <input
                        type="text"
                        onChange={e => updateEvent(e.target.value)}
                      />
                      <h2>Event Date</h2>
                      <input
                        type="text"
                        onChange={e => updateDate(e.target.value)}
                      />
                      <h2>Event Location</h2>
                      <input
                        type="text"
                        onChange={e => updateLocation(e.target.value)}
                      />
                    </div>
                    <h3 onClick={this.handleClick}>Submit</h3>
                  </div>
                </div>
                <div className="admin_sub1">
                  <h2>Calendar View</h2>
                  <div className="admin_calendar">
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateEvent,
    updateDate,
    updateLocation,
    getRequests
  }
)(Admin);
