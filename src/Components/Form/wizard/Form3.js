import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateInput } from '../../../ducks/requestReducer';

class Form3 extends Component {
  render() {
    const { updateInput } = this.props;

    const {
      eventTopic,
      presentationLength,
      presentationTime,
      presentationComments
    } = this.props.reducer;

    return (
      <div className="form_main">
        <h2>Speaker Request</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={eventTopic}
            name='eventTopic'
            onChange={updateInput}
          />
          <span id="ce_title">What is the topic or theme for the event?</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={presentationLength}
            name='presentationLength'
            onChange={updateInput}
          />
          <span id="ce_title">How long should the speaker present?</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={presentationTime}
            name='presentationTime'
            onChange={updateInput}
          />
          <span id="ce_title">What time(s) will he speak</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={presentationComments}
            name='presentationComments'
            onChange={updateInput}
          />
          <span id="ce_title">Additional information</span>
        </label>
        <div className="form_btn">
          <img
            onClick={this.props.toggleClickb}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            alt="Previous arrow"
          />
          <img
            onClick={this.props.toggleClick3}
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
)(Form3);
