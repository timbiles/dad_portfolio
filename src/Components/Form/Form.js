import React, { Component } from 'react';
import axios from 'axios';

import './Form.css';

class Form extends Component {
  state = {
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
  };
  componentDidMount() {
    this.getForm();
  }

  getForm = () => {
    axios.get('/api/speaker-request').then(res => {
      console.log(res);
    });
  };

  toggleClick1 = e => {
    this.setState({ two: true });
  };

  toggleClick2 = e => {
    this.setState({ three: true });
  };
  toggleClick3 = e => {
    this.setState({ four: true });
  };
  toggleClick4 = e => {
    this.setState({ five: true });
  };
  submitForm = e => {};

  render() {
    const { two, three, four, five } = this.state;

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
                placeholder="..."
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
            <h3 className="form_btn" onClick={e => this.toggleClick1(e)}>
              Next
            </h3>
          </div>

          {two && (
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
                <span id="ce_title">
                  Speaker Requested to attend entire event
                </span>
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
              <h3 className="form_btn" onClick={e => this.toggleClick2(e)}>
                Next
              </h3>
            </div>
          )}
          {three && (
            <div className="form_main">
              <h2>Speaker Request</h2>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">
                  What is the topic or theme for the event?
                </span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">How long should the speaker present?</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">What time(s) will he speak</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Additional information</span>
              </label>
              <h3 className="form_btn" onClick={e => this.toggleClick3(e)}>
                Next
              </h3>
            </div>
          )}
          {four && (
            <div className="form_main">
              <h2>Travel Information</h2>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Nearest airport to your location?</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Is airport transportation available</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Lodging to be booked by...</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Nearest Lodging or Location booked</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">
                  Requester will reimburse the following expenses
                </span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">
                  Reimbursement receipts should be sent to
                </span>
              </label>
              <h3 className="form_btn" onClick={e => this.toggleClick4(e)}>
                Next
              </h3>
            </div>
          )}
          {five && (
            <div className="form_main">
              <h2>Additional Information</h2>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Do you need biographical information</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Do you need a photo</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  // onChange={e => updateFirstName(e.target.value)}
                />
                <span id="ce_title">Do you need a W-2</span>
              </label>
              <h3 className="form_btn" onClick={e => this.submitForm(e)}>
                Submit
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Form;
