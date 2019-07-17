import React from 'react';

const burgerIcon = props => {
  const { id } = props;
  return (
    <div>
      <div className="hamburger_icon" id={id}>
        <div className="burger" id="burger1" />
        <div className="burger" id="burger2" />
        {id !== 'admin1' && <div className="burger burger3" />}
      </div>
    </div>
  );
};

export default burgerIcon;
