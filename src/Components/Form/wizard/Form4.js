import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updateAirport,
  updateAirportTransportation,
  updateLodging,
  updateLodgingLocation,
  updateTravelExpenses,
  updateReimbursementReceipts
} from '../../../ducks/requestReducer';

class Form4 extends Component {
  render() {
    const {
      updateAirport,
      updateAirportTransportation,
      updateLodging,
      updateLodgingLocation,
      updateTravelExpenses,
      updateReimbursementReceipts
    } = this.props;

    return (
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
          <span id="ce_title">Reimbursement receipts should be sent to</span>
        </label>
        <h3 className="form_btn" onClick={this.props.toggleClick4}>
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
    updateAirport,
    updateAirportTransportation,
    updateLodging,
    updateLodgingLocation,
    updateTravelExpenses,
    updateReimbursementReceipts
  }
)(Form4);
