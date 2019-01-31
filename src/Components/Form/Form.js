import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert2';

import './Form.scss';

import Form1 from './wizard/Form1';
import Form2 from './wizard/Form2';
import Form3 from './wizard/Form3';
import Form4 from './wizard/Form4';
import Form5 from './wizard/Form5';

import { getRequests } from '../../ducks/requestReducer';

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

  toggleClick1 = () => this.setState({ two: true, one: false });
  toggleClick2 = () => this.setState({ three: true, two: false });
  toggleClick3 = () => this.setState({ four: true, three: false });
  toggleClick4 = () => this.setState({ five: true, four: false });

  toggleClicka = () => this.setState({ one: true, two: false });
  toggleClickb = () => this.setState({ two: true, three: false });
  toggleClickc = () => this.setState({ three: true, four: false });
  toggleClickd = () => this.setState({ four: true, five: false });

  submitForm = id => {
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
      w2,
      requests
    } = this.props.reducer;

    axios
      .post(`/api/create-form`, {
        organization_name: organizationName,
        contact_name: contactName,
        phone_number: phoneNumber,
        email,
        event_name: eventName,
        event_date: eventDate,
        event_time:eventTime,
        speaker_request: speakerRequest,
        arrival_time: arrivalTime,
        event_location: eventLocation,
        event_description: eventDescription,
        event_topic: eventTopic,
        presentation_length: presentationLength,
        presentation_time: presentationTime,
        presentation_comments: presentationComments,
        airport,
        airport_transportation: airportTransportation,
        lodging,
        lodging_location: lodgingLocation,
        travel_expenses: travelExpenses,
        reimbursement_receipts: reimbursementReceipts,
        bio,
        img,
        w2,
        request_date: new Date()
      })
      .then(() => {
        this.props.history.push('/');
        swal({
          position: 'top-end',
          title: 'Your form has been submitted!',
          showConfirmButton: false,
          background: 'rgb(204,204,204)',
          timer: 2000
        });
        axios.post('/api/email', {
          id: requests.length && requests[requests.length - 1].id + 1,
          contactName,
          organizationName
        });
      });
  };

  render() {
    const { one, two, three, four, five } = this.state;
    return (
      <div className="form">
        <div className="form_container">
          <div className="form_tracker">
            {one ? <div /> : <p />}
            {two ? <div /> : <p />}
            {three ? <div /> : <p />}
            {four ? <div /> : <p />}
            {five ? <div /> : <p />}
          </div>
          <h1>Form</h1>

          {one && <Form1 toggleClick1={this.toggleClick1} />}

          {two && (
            <Form2
              toggleClicka={this.toggleClicka}
              toggleClick2={this.toggleClick2}
            />
          )}
          {three && (
            <Form3
              toggleClickb={this.toggleClickb}
              toggleClick3={this.toggleClick3}
            />
          )}
          {four && (
            <Form4
              toggleClickc={this.toggleClickc}
              toggleClick4={this.toggleClick4}
            />
          )}
          {five && (
            <Form5
              toggleClickd={this.toggleClickd}
              submitForm={id => this.submitForm(id)}
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
    getRequests
  }
)(Form);
