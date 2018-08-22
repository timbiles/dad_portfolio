import React, { Component } from 'react';
import axios from 'axios';

import './Form.css';

class Form extends Component {
  componentDidMount() {
    this.getForm();
  }

  getForm = () => {
    axios.get('/api/speaker-request').then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="form">
        <div className="form_container">
          <h1>Form</h1>
          <div className="form_main">
            <h2>Requester Information</h2>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Organization Name"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Organization Name</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Contact Name"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Contact Name</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Phone Number"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Phone Number</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Email Address"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Email Address</span>
            </label>
          </div>
          <div className="form_main">
            <h2>Event Information</h2>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event Name"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Name of Event</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event Date"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Date of Event</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="12:00"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Time of Event (start to end)</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Speaker Requested to attend entire event</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event Location"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Arrival Time</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event Location"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Event Location</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Event Description"
                // onChange={e => updateFirstName(e.target.value)}
              />
              <span id="ce_title">Event Description</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
