import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './Requests.css';

import { getRequests } from '../../ducks/requestReducer';

class Requests extends Component {
  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    const { requests } = this.props.reducer;

    const map = requests.map((e, i) => {
      return (
        <div className="request_map" key={i}>
          <div className="request_title">
            <h2>Request from {e.organization_name}</h2>
            <h3>
              Date requested:{' '}
              {moment.utc(e.request_date).format('MMM Do, YYYY')}
            </h3>
          </div>
          <div className="request_sub">
            <h3>Requestor Information</h3>
            <p>Contact Name: {e.contact_name}</p>
            <p>Phone Number: {e.phone_number}</p>
            <div className='email_holder'>
              Email: {e.email}
              <div >
                <a className="request_email" href={'mailto:' + e.email}>
                  <img
                    className="email_icon"
                    src="https://image.flaticon.com/icons/svg/263/263093.svg"
                    alt={e.email}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="request_sub">
            <h3>Event Information</h3>
            <p>Name of event: {e.event_name}</p>
            <p>
              Date of event: {moment.utc(e.event_date).format('MMM Do, YYYY')}
            </p>
            <p>Time of event: {e.event_time}</p>
            <p>Speaker requested to attend entire event? {e.speaker_request}</p>
            <p>Arrival Time: {e.arrival_time}</p>
            <p>Event Address: {e.event_location}</p>
            <p>Event description: {e.event_description}</p>
          </div>
          <div className="request_sub">
            <h3>Speaker Request</h3>
            <p>Event topic/theme: {e.event_topic}</p>
            <p>Length of presentation: {e.presentation_length}</p>
            <p>Time of presentation: {e.presentation_time}</p>
            <p>Additional info: {e.presentation_comments}</p>
          </div>
          <div className="request_sub">
            <h3>Travel Information</h3>
            <p>Preferred airport: {e.airport}</p>
            <p>
              Is airport transportation available? {e.airport_transportation}
            </p>
            <p>Lodgeing to be booked by? {e.lodging}</p>
            <p>Nearest Lodging or Location booked? {e.lodging_location}</p>
            <p>
              Requestor will reimburse the following expenses?{' '}
              {e.travel_expenses}
            </p>
            <p>
              Reimbursement receipts should be sent to?{' '}
              {e.reimbursement_receipts}
            </p>
          </div>
          <div className="request_sub">
            <h3>Additional Information</h3>
            <p>Do you need biographical information? {e.bio}</p>
            <p>Do you need a photo? {e.img}</p>
            <p>Do you need a W-2? {e.w2}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="requests">
        <div className="requests_container">
          <h1>Incoming Requests</h1>
          {map}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getRequests }
)(Requests);
