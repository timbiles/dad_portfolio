import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';

import Calendar from '../Calendar/Calendar';
import './Admin.css';

import {
  updateEvent,
  updateDate,
  updateTime,
  updateLocation,
  getCalendar
} from '../../ducks/eventsReducer';

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

class Admin extends Component {
  state = {
    modalIsOpen: false,
    pass: true,
    main: false,
    username: '',
    password: ''
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

  handleUsername = e => {
    this.setState({ username: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  submitAdmin = e => {
    const { username, password } = this.state;

    username === process.env.REACT_APP_LOGIN &&
      password === process.env.REACT_APP_PASSWORD &&
      this.setState({ pass: false, main: true });
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



  render() {
    const { updateEvent, updateDate, updateTime, updateLocation } = this.props;
    const { requests } = this.props.reducer;
    const { pass, main } = this.state;

    const map = requests.map(e => {
      return (
        <Link key={e.id} className="admin_link" to={`/requests/${e.id}`}>
          <div className="requests_map" key={e.id}>
            <h5>{e.organization_name}</h5>
            <p>{e.contact_name}</p>
          </div>
        </Link>
      );
    });

    return (
      <div className="admin">
        {pass && (
          <div className="admin_login">
            <h1>Welcome Deron!</h1>
            <div>
              <input type="text" onChange={this.handleUsername} />
              <input type="password" onChange={this.handlePassword} />
            </div>
            <div>
              <h3 onClick={e => this.submitAdmin(e)}>Submit</h3>
            </div>
          </div>
        )}
        {main && (
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
                      onChange={e => updateEvent(e.target.value)}
                    />
                    <h2>Event Date</h2>
                    <input
                      type="text"
                      onChange={e => updateDate(e.target.value)}
                    />
                    <h2>Event Time</h2>
                    <input
                      type="text"
                      onChange={e => updateTime(e.target.value)}
                    />
                    <h2>Event Location</h2>
                    <input
                      type="text"
                      onChange={e => updateLocation(e.target.value)}
                      onKeyDown={e => this.handleKeyDown(e)}
                    />
                  </div>
                  <h3 onClick={this.handleClick}>Submit</h3>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    updateEvent,
    updateDate,
    updateTime,
    updateLocation,
    getRequests,
    getCalendar
  }
)(Admin);
