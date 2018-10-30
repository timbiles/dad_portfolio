import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';

import Calendar from '../Calendar/Calendar';
import './Admin.css';

import { getCalendar, updateInput } from '../../ducks/eventsReducer';
import { getRequests } from '../../ducks/requestReducer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Lato, sans-serif',
    width: '50%'
  }
};

Modal.setAppElement(document.getElementById('root'));

class MainAdmin extends Component {
  state = {
    modalIsOpen: false
  };

  componentDidMount() {
    this.props.getRequests();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleClick = e => {
    const { event, date, time, location } = this.props.eventReducer;
    axios
      .post('/api/add-to-calendar', {
        event,
        date,
        time,
        location
      })
      .then(() => {
        this.props.getCalendar();
        this.closeModal();
      });
  };

  handleKeyDown = e => {
    const { event, date, time, location } = this.props.eventReducer;

    e.keyCode === 13 &&
      axios
        .post('/api/add-to-calendar', {
          event,
          date,
          time,
          location
        })
        .then(() => {
          this.props.getCalendar();
          this.closeModal();
        });
  };

  deleteForm = e => {
    swal({
      position: 'top-end',
      type: 'warning',
      title: 'Removing this request is permanant.',
      text: 'Do you wish to continue?',
      confirmButtonText: 'Yes, remove it!',
      showCancelButton: true
    }).then(res => {
      if (res.value) {
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Deleted',
          text: 'This Request has been deleted!',
          showConfirmButton: false,
          timer: 1500
        });
        axios.delete(`/api/delete-form/${e}`).then(()=> {
          this.props.getRequests()
        })

          .catch(() => {
            swal({
              position: 'top-end',
              type: 'warning',
              title:
                'You cannot remove this form!'
            });
          });
      } else if (res.dismiss === swal.DismissReason.cancel) {
        swal('Cancelled', 'The request is still here :)', 'error');
      }
    });


    
  };

  render() {
    const { updateInput } = this.props;
    const { requests } = this.props.reducer;

    const map = requests.map(e => {
      return (
        <div className="requests_map" key={e.id}>
          <Link className="admin_link" to={`/requests/${e.id}`}>
            <h5>{e.organization_name}</h5>
          </Link>
          <p>{e.contact_name}</p>
          <p className="form_del" onClick={() => this.deleteForm(e.id)}>
            X
          </p>
        </div>
      );
    });
    return (
      <div className="admin_main">
        <div className="admin_main_sub">
          <h1>Welcome, Deron!</h1>
          <div>
            <div className="admin_sub1">
              <h2 className="admin_title">Incoming Requests</h2>
              <div className="admin_map">{map}</div>
            </div>
            <div className="admin_sub2">
              <h2 className="admin_title">Calendar View</h2>
              <div className="admin_calendar">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
        <h2 className="modal_open" onClick={() => this.openModal()}>
          Add Event
        </h2>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="admin_sub3">
            <h2 className="admin_title">Create New Event</h2>
            <div className="events_input">
              <div>
                <h2>Event Name</h2>
                <input
                  type="text"
                  name="event"
                  onChange={e => updateInput(e)}
                />
                <h2>Event Date</h2>
                <input type="text" name="date" onChange={e => updateInput(e)} />
                <h2>Event Time</h2>
                <input type="text" name="time" onChange={e => updateInput(e)} />
                <h2>Event Location</h2>
                <input
                  type="text"
                  name="location"
                  onChange={e => updateInput(e)}
                  onKeyDown={e => this.handleKeyDown(e)}
                />
              </div>
              <h3 onClick={this.handleClick}>Submit</h3>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getRequests,
    getCalendar,
    updateInput
  }
)(MainAdmin);
