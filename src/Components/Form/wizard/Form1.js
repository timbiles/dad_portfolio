import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Form.css';

import {
  getRequests,
  updateOrganization,
  updateContactName,
  updatePhoneNumber,
  updateEmail
} from '../../../ducks/requestReducer';

class Form1 extends Component {
  state = {
    validate: false
  };

  render() {
    const {
      updateOrganization,
      updateContactName,
      updatePhoneNumber,
      updateEmail
    } = this.props;

    const {
      organizationName,
      contactName,
      phoneNumber,
      email
    } = this.props.reducer;

    const { validate } = this.state;
    return (
      <div className="form_main form_1">
        <h2>Requester Information</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={organizationName}
            onChange={e => updateOrganization(e.target.value)}
          />
          <span id="ce_title">Organization Name</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={contactName}
            onChange={e => updateContactName(e.target.value)}
          />
          <span id="ce_title">Contact Name</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={phoneNumber}
            onChange={e => updatePhoneNumber(e.target.value)}
          />
          <span id="ce_title">Phone Number</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={email}
            onChange={e => updateEmail(e.target.value)}
          />
          <span id="ce_title">Email Address</span>
        </label>
        {validate && <p className="validation">*Please complete each field.</p>}
        <div className="form_btn">
          {!organizationName || !contactName || !phoneNumber || !email ? (            
            <img
              onClick={() => this.setState({ validate: true })}
              src="https://image.flaticon.com/icons/svg/118/118740.svg"
              alt="Next arrow"
            />
          ) : (
            <img
              onClick={this.props.toggleClick1}
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
    getRequests,
    updateOrganization,
    updateContactName,
    updatePhoneNumber,
    updateEmail
  }
)(Form1);
