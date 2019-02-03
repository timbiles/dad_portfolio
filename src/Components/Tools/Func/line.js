import React, { Fragment } from 'react';

export const line = e => {
  return (
    <Fragment>
      <div className="line_container">
        <div className="a_line" />
        <div className="a_line" />
      </div>
      <div className="fader">
        <h1 className="about_name">{e}</h1>
      </div>
      <div className="line_container">
        <div className="a_line" />
        <div className="a_line" />
      </div>
    </Fragment>
  );
};
