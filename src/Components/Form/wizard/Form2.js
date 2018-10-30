import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateInput } from '../../../ducks/requestReducer';

class Form2 extends Component {
  state = {
    validate: false
  };
  render() {
    const { updateInput } = this.props;

    const {
      eventName,
      eventDate,
      eventTime,
      speakerRequest,
      arrivalTime,
      eventLocation,
      eventDescription
    } = this.props.reducer;

    return (
      <div className="form_main">
        <h2>Event Information</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={eventName}
            name="eventName"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Name of Event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={eventDate}
            name="eventDate"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Date of Event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="12:00"
            value={eventTime}
            name="eventTime"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Time of Event (start to end)</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={speakerRequest}
            name="speakerRequest"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Speaker Requested to attend entire event</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={arrivalTime}
            name="arrivalTime"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Arrival Time</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={eventLocation}
            name="eventLocation"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Event Location</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={eventDescription}
            name="eventDescription"
            onChange={e => updateInput(e)}
          />
          <span id="ce_title">Event Description</span>
        </label>
        {this.state.validate && (
          <p className="validation">*Please complete each field.</p>
        )}
        <div className="form_btn">
          <img
            onClick={this.props.toggleClicka}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            alt="Previous arrow"
          />
          {!eventName ||
          !eventDate ||
          !eventTime ||
          !speakerRequest ||
          !arrivalTime ||
          !eventLocation ||
          !eventDescription ? (
            <img
              onClick={() => this.setState({ validate: true })}
              src="https://image.flaticon.com/icons/svg/118/118740.svg"
              alt="Next arrow"
            />
          ) : (
            <img
              onClick={this.props.toggleClick2}
              src="https://image.flaticon.com/icons/svg/118/118740.svg"
              alt="Next arrow"
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateInput
  }
)(Form2);
