import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import Fade from 'react-reveal/Fade';

import './Calendar.css';

import { getCalendar } from '../../ducks/eventsReducer';

class Calendar extends Component {
  componentDidMount() {
    this.props.getCalendar();
    this.deleteOld();
  }

  deleteOld = () => {
    axios.delete('/api/delete');
  };

  render() {
    const { calendar } = this.props.eventReducer;
    const map =
      calendar &&
      calendar.map(e => {
        return (
          <div key={e.id} className="upcoming_events">
            <Fade top cascade>
              <div className="ue_div">
                <p>{moment.utc(e.date).format('MMMM D, YYYY')}</p>
                <p>
                  {e.event} - {e.location}
                </p>
              </div>
            </Fade>
          </div>
        );
      });

      const map2 =
      calendar &&
      calendar.map(e => { 
        return (
          <div key={e.id} className='admin_calview'>
            <Fade top cascade>
            <div className="admin_cal_sub">
                <p>{moment.utc(e.date).format('MMMM D, YYYY')}</p>
                <p>
                  {e.event} - {e.location}
                </p>
              </div>
            </Fade>
          </div>
        )
      })     

    return this.props.type === 'homepage' ? (
      <div className="calendar">
        <h3>Upcoming Events</h3>

        {map}
      </div>
    ) : (
      <p>{map2}</p>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getCalendar }
)(Calendar);
