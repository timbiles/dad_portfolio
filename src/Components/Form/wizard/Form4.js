import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateInput } from '../../../ducks/requestReducer';

class Form4 extends Component {
  render() {
    const { updateInput } = this.props;

    const {
      airport,
      airportTransportation,
      lodging,
      lodgingLocation,
      travelExpenses,
      reimbursementReceipts
    } = this.props.reducer;

    return (
      <div className="form_main">
        <h2>Travel Information</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={airport}
            name="airport"
            onChange={updateInput}
          />
          <span id="ce_title">Nearest airport to your location?</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={airportTransportation}
            name="airportTransportation"
            onChange={updateInput}
          />
          <span id="ce_title">Is airport transportation available</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={lodging}
            name="lodging"
            onChange={updateInput}
          />
          <span id="ce_title">Lodging to be booked by...</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={lodgingLocation}
            name="lodgingLocation"
            onChange={updateInput}
          />
          <span id="ce_title">Nearest Lodging or Location booked</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={travelExpenses}
            name="travelExpenses"
            onChange={updateInput}
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
            value={reimbursementReceipts}
            name="reimbursementReceipts"
            onChange={updateInput}
          />
          <span id="ce_title">Reimbursement receipts should be sent to</span>
        </label>
        <div className="form_btn">
          <img
            onClick={this.props.toggleClickc}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            alt="Previous arrow"
          />
          <img
            onClick={this.props.toggleClick4}
            src="https://image.flaticon.com/icons/svg/118/118740.svg"
            alt="Next arrow"
          />
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
)(Form4);
