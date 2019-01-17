import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert2';

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

  deleteEvent = id => {
    swal({
      position: 'top-end',
      type: 'warning',
      title: 'Removing this event is permanent.',
      text: 'Do you wish to continue?',
      confirmButtonText: 'Yes, remove it!',
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Deleted',
          text: 'Your Event has been deleted!',
          showConfirmButton: false,
          timer: 1500
        });
        axios
          .delete(`/api/delete-event/${id}`)
          .then(() => {
            this.props.getCalendar();
          })

          .catch(() => {
            swal({
              position: 'top-end',
              type: 'warning',
              title:
                'You cannot remove an event that someone has already signed up for!'
            });
          });
      } else if (res.dismiss === swal.DismissReason.cancel) {
        swal('Cancelled', 'Your Event is still here :)', 'error');
      }
    });
  };

  render() {
    const { calendar } = this.props.eventReducer;
    const map =
      calendar &&
      calendar.map(e => {
        return (
          <div key={e.id} className="upcoming_events">
            <div className='scroll'>            
              <div className="ue_div">
                <h5>{moment.utc(e.date).format('MMMM D, YYYY')}</h5>
                <div className="ue_sub">
                  <div className="ue_1">
                    <p>{e.time}</p>
                  </div>
                  <div className="ue_2">
                    <p>{e.event}</p>
                    <p>{e.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });

    const map2 =
      calendar &&
      calendar.map(e => {
        return (
          <div key={e.id} className="upcoming_events1">
            <div className='fader'>
            
              <div className="ue_div">
                <h5>{moment.utc(e.date).format('MMMM D, YYYY')}</h5>
                <div className="ue_sub">
                  <div className="ue_1">
                    <p>{e.time}</p>
                  </div>
                  <div className="ue_2">
                    <p>{e.event}</p>
                    <p>{e.location}</p>
                  </div>
                  <p
                    className="admin_delete btn"
                    onClick={id => this.deleteEvent(e.id)}
                  >
                    Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });

    return this.props.type === 'homepage' ? (
      <div className="calendar">
        <h3>Upcoming Events</h3>

        {map}
      </div>
    ) : (
      <div className="admin_calendar">{map2}</div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getCalendar }
)(Calendar);
