import React, {Fragment} from 'react';
import Fade from 'react-reveal/Fade';

export const line = e => {
    return (
        <Fragment>
          <div className="line_container">
                <div className="a_line" />
                <div className="a_line" />
              </div>
              <Fade cascade>
                <h1 className="about_name">{e}</h1>
              </Fade>
              <div className="line_container">
                <div className="a_line" />
                <div className="a_line" />
              </div>
        </Fragment>
        )
}