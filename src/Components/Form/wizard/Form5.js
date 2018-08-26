import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateBio, updateImg, updateW2 } from '../../../ducks/requestReducer';

class Form5 extends Component {
  render() {
    const { updateBio, updateImg, updateW2, bio, img, w2 } = this.props;

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
            onChange={e => updateBio(e.target.value)}
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
            onChange={e => updateImg(e.target.value)}
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
            onChange={e => updateW2(e.target.value)}
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
    updateBio,
    updateImg,
    updateW2
  }
)(Form5);
