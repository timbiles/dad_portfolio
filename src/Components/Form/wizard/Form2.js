import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateEventName,
  updateEventDate,
  updateEventTime,
  updateSpeakerRequest,
  updateArrivalTime,
  updateEventLocation,
  updateEventDescription
} from '../../../ducks/requestReducer';

class Form2 extends Component {
  render() {
    const {
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateSpeakerRequest,
      updateArrivalTime,
      updateEventLocation,
      updateEventDescription
    } = this.props;

    return (
      <div className="form_main">
        <h2>Event Information</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="Event Name"
            onChange={e => updateEventName(e.target.value)}
          />
          <span id="ce_title">Name of Event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="Event Date"
            onChange={e => updateEventDate(e.target.value)}
          />
          <span id="ce_title">Date of Event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="12:00"
            onChange={e => updateEventTime(e.target.value)}
          />
          <span id="ce_title">Time of Event (start to end)</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="Event"
            onChange={e => updateSpeakerRequest(e.target.value)}
          />
          <span id="ce_title">Speaker Requested to attend entire event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            onChange={e => updateArrivalTime(e.target.value)}
          />
          <span id="ce_title">Arrival Time</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            onChange={e => updateEventLocation(e.target.value)}
          />
          <span id="ce_title">Event Location</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            onChange={e => updateEventDescription(e.target.value)}
          />
          <span id="ce_title">Event Description</span>
        </label>
        <h3 className="form_btn" onClick={this.props.toggleClick2}>
          Next
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateEventName,
    updateEventDate,
    updateEventTime,
    updateSpeakerRequest,
    updateArrivalTime,
    updateEventLocation,
    updateEventDescription
  }
)(Form2);
