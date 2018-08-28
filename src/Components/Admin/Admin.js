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
  componentDidMount() {
    this.props.getRequests();
  }

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
        <h1>Welcome, Deron!</h1>
        <h2>Incoming Requests</h2>
        <div className="admin_map">{map}</div>

        <h2 className="ce_title">Create New Event</h2>
        <div className="events_input">
          <div>
            <h2>Event Name</h2>
            <input type="text" onChange={e => updateEvent(e.target.value)} />
            <h2>Event Date</h2>
            <input type="text" onChange={e => updateDate(e.target.value)} />
            <h2>Event Location</h2>
            <input type="text" onChange={e => updateLocation(e.target.value)} />
          </div>
          <h3 onClick={this.handleClick}>Submit</h3>
        </div>
        <h2 className="calendar_view">Calendar View</h2>

        <Calendar />
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
