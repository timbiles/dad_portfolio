import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Fade from 'react-reveal/Fade';

import './Calendar.css';

class Calendar extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.getCalendar();
  }

  getCalendar = () => {
    axios.get('/api/calendar').then(res => {
      this.setState({ events: res.data });
    });
  };

  render() {
    const map =
      this.state.events &&
      this.state.events.map(e => {
        return (
          <div key={e.id} className="upcoming_events">
            <Fade top cascade>
              <div className='ue_div'>
                <p>{moment.utc(e.date).format('MMMM D, YYYY')}</p>
                <p>
                  {e.event} - {e.location}
                </p>
              </div>
            </Fade>
          </div>
        );
      });

    return (
      <div className="calendar">
        <h3>Upcoming Events</h3>

        {map}
      </div>
    );
  }
}

export default Calendar;
