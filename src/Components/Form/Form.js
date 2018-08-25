import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert2';

import './Form.css';

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

  toggleClick1 = e => this.setState({ two: true, one: false });
  toggleClick2 = e => this.setState({ three: true, two: false });
  toggleClick3 = e => this.setState({ four: true, three: false });
  toggleClick4 = e => this.setState({ five: true, four: false });

  toggleClicka = e => this.setState({ one: true, two: false });
  toggleClickb = e => this.setState({ two: true, three: false });
  toggleClickc = e => this.setState({ three: true, four: false });
  toggleClickd = e => this.setState({ four: true, five: false });

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

    axios
      .post(`/api/create-form`, {
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
      })
      .then(() => {
        this.props.history.push('/');
      })
      .then(() => {
        swal({
          position: 'bottom-end',
          title: 'Your form has been submitted!',
          showConfirmButton: false,
          background: '#000',
          timer: 2000
        });
      });
  };

  render() {
    const { one, two, three, four, five } = this.state;
    return (
      <div className="form">
        <div className="form_container">
          <h1>Form</h1>

          {one && <Form1 toggleClick1={e => this.toggleClick1(e)} />}

          {two && (
            <Form2
              toggleClicka={e => this.toggleClicka(e)}
              toggleClick2={e => this.toggleClick2(e)}
            />
          )}
          {three && (
            <Form3
              toggleClickb={e => this.toggleClickb(e)}
              toggleClick3={e => this.toggleClick3(e)}
            />
          )}
          {four && (
            <Form4
              toggleClickc={e => this.toggleClickc(e)}
              toggleClick4={e => this.toggleClick4(e)}
            />
          )}
          {five && (
            <Form5
              toggleClickd={e => this.toggleClickd(e)}
              submitForm={e => this.submitForm(e)}
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
