import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateInput } from '../../../ducks/requestReducer';

class Form5 extends Component {
  render() {
    const { updateInput } = this.props;
      
      const { bio, img, w2 } = this.props.reducer;

    return (
      <div className="form_main">
        <h2>Additional Information</h2>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={bio}
            name='bio'
            onChange={updateInput}
          />
          <span id="ce_title">Do you need biographical information</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={img}
            name='img'
            onChange={updateInput}
          />
          <span id="ce_title">Do you need a photo</span>
        </label>
        <label className="has-float-label">
          <input
            required
            className="input_field"
            type="text"
            placeholder="..."
            value={w2}
            name='w2'
            onChange={updateInput}
          />
          <span id="ce_title">Do you need a W-2</span>
        </label>
        <div className="form_btn">
          <img
            onClick={this.props.toggleClickd}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            alt="Previous arrow"
          />

          <h3 className="submit_btn" onClick={this.props.submitForm}>
            Submit
          </h3>
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
)(Form5);
