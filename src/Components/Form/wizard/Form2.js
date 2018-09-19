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
  state = {
    validate: false
  }
  render() {    
    const {
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateSpeakerRequest,
      updateArrivalTime,
      updateEventLocation,
      updateEventDescription,
    } = this.props;

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
            onChange={e => updateEventName(e.target.value)}
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
            value={eventTime}            
            onChange={e => updateEventTime(e.target.value)}
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
            value={arrivalTime}            
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
            value={eventLocation}            
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
            value={eventDescription}            
            onChange={e => updateEventDescription(e.target.value)}
          />
          <span id="ce_title">Event Description</span>
        </label>
        {this.state.validate && <p className="validation">*Please complete each field.</p>}
        <div className="form_btn">
          <img
            onClick={this.props.toggleClicka}          
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            alt="Previous arrow"
          />
          {!eventName || !eventDate || !eventTime|| !speakerRequest || !arrivalTime || !eventLocation|| !eventDescription? (
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
    updateEventName,
    updateEventDate,
    updateEventTime,
    updateSpeakerRequest,
    updateArrivalTime,
    updateEventLocation,
    updateEventDescription
  }
)(Form2);
