import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import moment from 'moment';
import swal from 'sweetalert2';

import Calendar from '../Calendar/Calendar';
import BurgerIcon from '../Hamburger/burgerIcon';
import ArticleList from '../Article/ArticleList';

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
    modal1: false,
    modal2: false,
    title: '',
    img: '',
    url: '',
    date: '',
    topic: '',
    desc: '',
    menu: false,
    navClass: false,
    recurring: false,
    recurringNumber: 5
  };

  componentDidMount() {
    this.props.getRequests();
  }

  closeModal = () => this.setState({ modal1: false, modal2: false });

  handleClick = e => {
    const { event, date, time, location } = this.props.eventReducer;
    const { recurringNumber, recurring } = this.state;
    const eventDate = new Date(date);

    let tempDate = eventDate;

    if (recurring) {
      for (let i = 1; i <= recurringNumber; i += 1) {
        const newDate = new Date(tempDate);
        newDate.setDate(newDate.getDate() + 7);
        const sendDate = moment.utc(newDate, 'L').format('L');
        axios
          .post('/api/add-to-calendar', {
            event,
            date: i === 1 ? date : sendDate,
            time,
            location
          })
          .then(() => {
            this.props.getCalendar();
            this.closeModal();
          });
        if (i !== 1) {
          tempDate = newDate;
        }
      }
    } else {
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
    }
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
      title: 'Removing this request is permanent.',
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
        axios
          .delete(`/api/delete-form/${e}`)
          .then(() => {
            this.props.getRequests();
          })

          .catch(() => {
            swal({
              position: 'top-end',
              type: 'warning',
              title: 'You cannot remove this form!'
            });
          });
      } else if (res.dismiss === swal.DismissReason.cancel) {
        swal('Cancelled', 'The request is still here :)', 'error');
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick2 = () => {
    const { title, img, url, date, topic, desc } = this.state;

    axios
      .post('/api/article', { title, img, url, date, topic, description: desc })
      .then(() => {
        this.closeModal();
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  click = e => {
    const { id } = e.target;
    if (id === 'admin1' || id === 'burger1' || id === 'burger2') {
      this.setState({ menu: true });
    } else if (id !== 'admin1') {
      this.setState({ navClass: true }, () => {
        setTimeout(() => {
          this.setState({ menu: false, navClass: false });
        }, 700);
      });
    }
  };

  render() {
    const { updateInput } = this.props;
    const { requests } = this.props.reducer;
    const { menu, navClass, recurring, recurringNumber } = this.state;

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
      <div className="admin_main" onClick={this.click}>
        <div className="admin_main_sub">
          <nav>
            {!menu && <BurgerIcon id="admin1" />}
            {menu && (
              <div
                style={{ background: '#232f3e' }}
                className={navClass ? 'dropdown exit' : 'dropdown'}
              >
                <div className="admin_side">
                  <section>
                    <img
                      src="https://res.cloudinary.com/dwvrok1le/image/upload/v1548956571/calendar_1.png"
                      alt=""
                    />
                    <h4 onClick={() => this.setState({ modal1: true })}>
                      Add Event
                    </h4>
                  </section>
                  <section>
                    <img
                      src="https://res.cloudinary.com/dwvrok1le/image/upload/v1548956855/newspaper.png"
                      alt=""
                    />
                    <h4 onClick={() => this.setState({ modal2: true })}>
                      Add Article
                    </h4>
                  </section>
                  <section>
                    <img
                      src="https://res.cloudinary.com/dwvrok1le/image/upload/v1548956924/blogging.png"
                      alt=""
                    />
                    <Link to="/createblog">
                      <h4>Create Blog</h4>
                    </Link>
                  </section>
                </div>
                <p>www.deronjbiles.com</p>
              </div>
            )}
            <h1>Welcome, Deron!</h1>
          </nav>
          <div className="admin-article-body">
            <div className="admin-top-container">
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
            <div className="admin-bottom-container">
              <h2 className="admin_title">Article List</h2>
              <ArticleList type="admin" />
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal1}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="admin_sub3">
            <h2 className="admin_title">Create New Event</h2>
            <div className="events_input">
              <div>
                <h2>Event Name</h2>
                <input type="text" name="event" onChange={updateInput} />
                <h2>Event Date</h2>
                <input
                  type="text"
                  name="date"
                  onChange={updateInput}
                  placeholder="06/01/1992"
                />
                <h2>Event Time</h2>
                <input type="text" name="time" onChange={updateInput} />
                <h2>Event Location</h2>
                <input
                  type="text"
                  name="location"
                  onChange={updateInput}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div>
                <h3 onClick={this.handleClick}>Submit</h3>
                <div className="recurring_checkbox">
                  <div>
                    <input
                      type="checkbox"
                      name="recurring"
                      onChange={() => this.setState({ recurring: !recurring })}
                    />
                    <label htmlFor="recurring">Recurring</label>
                  </div>
                  <input
                    type="number"
                    value={recurringNumber}
                    onChange={e =>
                      this.setState({ recurringNumber: +e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.modal2}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <div className="admin_sub3">
            <h2 className="admin_title">Create New Article</h2>
            <div className="events_input events_input2">
              <div>
                <h2>Article Title</h2>
                <input
                  type="text"
                  name="title"
                  onChange={e => this.handleChange(e)}
                />
                <h2>Article Image</h2>
                <input
                  type="text"
                  name="img"
                  onChange={e => this.handleChange(e)}
                />
                <h2>Article URL</h2>
                <input
                  type="text"
                  name="url"
                  onChange={e => this.handleChange(e)}
                />
                <h2>Article date</h2>
                <input
                  type="text"
                  name="date"
                  onChange={e => this.handleChange(e)}
                />
                <h2>Article topics (if any)</h2>
                <input
                  type="text"
                  name="topic"
                  onChange={e => this.handleChange(e)}
                />
                <h2>Article description</h2>
                <input
                  type="text"
                  name="desc"
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <h3 onClick={this.handleClick2}>Submit</h3>
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
