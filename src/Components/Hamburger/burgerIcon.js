import React, { Fragment } from 'react';

const burgerIcon = (props) => {
  const {id} = props
  return (
    <Fragment>
      <div className="hamburger_icon" id={id}>
        <div className="burger" />
        <div className="burger" />
        {id !== 'admin1' && <div className="burger burger3" />}
      </div>
    </Fragment>
  );
};

export default burgerIcon;
