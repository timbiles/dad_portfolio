import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getRequests,
  updateOrganization,
  updateContactName,
  updatePhoneNumber,
  updateEmail
} from '../../../ducks/requestReducer';

class Form1 extends Component {
  render() {
    const {
      updateOrganization,
      updateContactName,
      updatePhoneNumber,
      updateEmail
    } = this.props;

    return (
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
            <div className="form_btn" > 

            <h3 onClick={this.props.toggleClick1}>
              Next
            </h3>
            </div>
          </div>
    )
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
