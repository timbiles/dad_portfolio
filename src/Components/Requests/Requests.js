import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Print from 'rc-print';
import Fade from 'react-reveal/Fade';

import './Requests.css';

import { getRequests } from '../../ducks/requestReducer';

class Requests extends Component {
  componentDidMount() {
    this.props.getRequests();
  }

  render() {
    const { requests } = this.props.reducer;

    let request =
      requests.find(e => e.id === +this.props.match.params.id) || false;

    return (
      <div className="requests">
        <div className="requests_title">
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
          <Fade cascade>
            <h1 className="about_name">Request Form</h1>
          </Fade>
          <div className="line_container">
            <div className="a_line" />
            <div className="a_line" />
          </div>
        </div>

        <p className="bt_admin btn" onClick={() => this.props.history.goBack()}>
          Back to admin
        </p>
        <Print ref="test">
          <div className="request_container">
            <div className="request_title">
              <h2>Request from {request.organization_name}</h2>
              <h3>
                Date requested:{' '}
                {moment.utc(request.request_date).format('MMM Do, YYYY')}
              </h3>
            </div>
            <div className="request_sub">
              <h3>Requestor Information</h3>
              <p>Contact Name: {request.contact_name}</p>
              <p>Phone Number: {request.phone_number}</p>
              <div className="email_holder">
                Email: {request.email}
                <div>
                  <a className="request_email" href={'mailto:' + request.email}>
                    <img
                      className="email_icon"
                      src="https://image.flaticon.com/icons/svg/263/263093.svg"
                      alt={request.email}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="request_sub">
              <h3>Event Information</h3>
              <p>Name of event: {request.event_name}</p>
              <p>
                Date of event:{' '}
                {moment.utc(request.event_date).format('MMM Do, YYYY')}
              </p>
              <p>Time of event: {request.event_time}</p>
              <p>
                Speaker requested to attend entire event?{' '}
                {request.speaker_request}
              </p>
              <p>Arrival Time: {request.arrival_time}</p>
              <p>Event Address: {request.event_location}</p>
              <p>Event description: {request.event_description}</p>
            </div>
            <div className="request_sub">
              <h3>Speaker Request</h3>
              <p>Event topic/theme: {request.event_topic}</p>
              <p>Length of presentation: {request.presentation_length}</p>
              <p>Time of presentation: {request.presentation_time}</p>
              <p>Additional info: {request.presentation_comments}</p>
            </div>
            <div className="request_sub">
              <h3>Travel Information</h3>
              <p>Preferred airport: {request.airport}</p>
              <p>
                Is airport transportation available?{' '}
                {request.airport_transportation}
              </p>
              <p>Lodgeing to be booked by? {request.lodging}</p>
              <p>
                Nearest Lodging or Location booked? {request.lodging_location}
              </p>
              <p>
                Requestor will reimburse the following expenses?{' '}
                {request.travel_expenses}
              </p>
              <p>
                Reimbursement receipts should be sent to?{' '}
                {request.reimbursement_receipts}
              </p>
            </div>
            <div className="request_sub">
              <h3>Additional Information</h3>
              <p>Do you need biographical information? {request.bio}</p>
              <p>Do you need a photo? {request.img}</p>
              <p>Do you need a W-2? {request.w2}</p>
            </div>
          </div>
        </Print>
        <div className="requests_btn_holder">
          <h3
            className="print_btn"
            onClick={() => {
              this.refs.test.onPrint();
            }}
          >
            Print
          </h3>
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
