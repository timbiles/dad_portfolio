import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './Form.css';

import {
  getRequests,
  updateOrganization,
  updateContactName,
  updatePhoneNumber,
  updateEmail,
  updateEventName,
  updateEventDate,
  updateEventTime,
  updateSpeakerRequest,
  updateArrivalTime,
  updateEventLocation,
  updateEventDescription,
  updateEventTopic,
  updatePresentationLength,
  updatePresentationTime,
  updatePresentationComments,
  updateAirport,
  updateAirportTransportation,
  updateLodging,
  updateLodgingLocation,
  updateTravelExpenses,
  updateReimbursementReceipts,
  updateBio,
  updateImg,
  updateW2
} from '../../ducks/requestReducer';

class Form extends Component {
  state = {
    one: true,
    two: false,
    three: false,
    four: false,
    five: false
  };
  componentDidMount() {
    this.props.getRequests();
  }

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
  submitForm = e => {
    let {
      organizationName,
      contactName,
      phoneNumber,
      email,
      eventName,
      eventDate,
      eventTime,
      speakerRequest,
      arrivalTime,
      eventLocation,
      eventDescription,
      eventTopic,
      presentationLength,
      presentationTime,
      presentationComments,
      airport,
      airportTransportation,
      lodging,
      lodgingLocation,
      travelExpenses,
      reimbursementReceipts,
      bio,
      img,
      w2
    } = this.props;

    axios.post(`/api/create-form`, {
      organizationName,
      contactName,
      phoneNumber,
      email,
      eventName,
      eventDate,
      eventTime,
      speakerRequest,
      arrivalTime,
      eventLocation,
      eventDescription,
      eventTopic,
      presentationLength,
      presentationTime,
      presentationComments,
      airport,
      airportTransportation,
      lodging,
      lodgingLocation,
      travelExpenses,
      reimbursementReceipts,
      bio,
      img,
      w2
    });
  };

  render() {
    const { two, three, four, five } = this.state;
    const {
      updateOrganization,
      updateContactName,
      updatePhoneNumber,
      updateEmail,
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateSpeakerRequest,
      updateArrivalTime,
      updateEventLocation,
      updateEventDescription,
      updateEventTopic,
      updatePresentationLength,
      updatePresentationTime,
      updatePresentationComments,
      updateAirport,
      updateAirportTransportation,
      updateLodging,
      updateLodgingLocation,
      updateTravelExpenses,
      updateReimbursementReceipts,
      updateBio,
      updateImg,
      updateW2
    } = this.props;

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
                onChange={e => updateOrganization(e.target.value)}
              />
              <span id="ce_title">Organization Name</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Contact Name"
                onChange={e => updateContactName(e.target.value)}
              />
              <span id="ce_title">Contact Name</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Phone Number"
                onChange={e => updatePhoneNumber(e.target.value)}
              />
              <span id="ce_title">Phone Number</span>
            </label>
            <label className="has-float-label">
              <input
                required
                className="input_field"
                type="text"
                placeholder="Email Address"
                onChange={e => updateEmail(e.target.value)}
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
                <span id="ce_title">
                  Speaker Requested to attend entire event
                </span>
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
                  onChange={e => updateEventTopic(e.target.value)}
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
                  onChange={e => updatePresentationLength(e.target.value)}
                />
                <span id="ce_title">How long should the speaker present?</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updatePresentationTime(e.target.value)}
                />
                <span id="ce_title">What time(s) will he speak</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updatePresentationComments(e.target.value)}
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
                  onChange={e => updateAirport(e.target.value)}
                />
                <span id="ce_title">Nearest airport to your location?</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateAirportTransportation(e.target.value)}
                />
                <span id="ce_title">Is airport transportation available</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateLodging(e.target.value)}
                />
                <span id="ce_title">Lodging to be booked by...</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateLodgingLocation(e.target.value)}
                />
                <span id="ce_title">Nearest Lodging or Location booked</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateTravelExpenses(e.target.value)}
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
                  onChange={e => updateReimbursementReceipts(e.target.value)}
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
                  onChange={e => updateBio(e.target.value)}
                />
                <span id="ce_title">Do you need biographical information</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateImg(e.target.value)}
                />
                <span id="ce_title">Do you need a photo</span>
              </label>
              <label className="has-float-label">
                <input
                  required
                  className="input_field"
                  type="text"
                  placeholder="..."
                  onChange={e => updateW2(e.target.value)}
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

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getRequests,
    updateOrganization,
    updateContactName,
    updatePhoneNumber,
    updateEmail,
    updateEventName,
    updateEventDate,
    updateEventTime,
    updateSpeakerRequest,
    updateArrivalTime,
    updateEventLocation,
    updateEventDescription,
    updateEventTopic,
    updatePresentationLength,
    updatePresentationTime,
    updatePresentationComments,
    updateAirport,
    updateAirportTransportation,
    updateLodging,
    updateLodgingLocation,
    updateTravelExpenses,
    updateReimbursementReceipts,
    updateBio,
    updateImg,
    updateW2
  }
)(Form);
