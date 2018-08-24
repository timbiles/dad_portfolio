import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    updateEventTopic,
    updatePresentationLength,
    updatePresentationTime,
    updatePresentationComments
} from '../../../ducks/requestReducer';

class Form3 extends Component {
render() {
const {
    updateEventTopic,
  updatePresentationLength,
  updatePresentationTime,
  updatePresentationComments
} = this.props
    return (
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
              <h3 className="form_btn" onClick={this.props.toggleClick3}>
                Next
              </h3>
            </div>
    )
}
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateEventTopic,
    updatePresentationLength,
    updatePresentationTime,
    updatePresentationComments
  }
)(Form3);