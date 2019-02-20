import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor (props) {
    super(props);
    this.whichPicture = this.whichPicture.bind(this);
    this.whichRsvpButton = this.whichRsvpButton.bind(this);
    this.whichStatus = this.whichStatus.bind(this);
    this.toggleButtons = this.toggleButtons.bind(this);
  }

  componentDidMount () {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  whichPicture (id) {
    if (id % 10 === 9) { var img = `/img8.jpg`; }
    else if (id % 10 === 8) { var img = `/img9.jpg`; }
    else if (id % 10 === 7) { var img = `/img7.jpg`; }
    else if (id % 10 === 6) { var img = `/img6.jpg`; }
    else if (id % 10 === 5) { var img = `/img5.jpg`; }
    else if (id % 10 === 4) { var img = `/img4.jpg`; }
    else if (id % 10 === 3) { var img = `/img3.jpg`; }
    else if (id % 10 === 2) { var img = `/img2.jpg`; }
    else if (id % 10 === 1) { var img = `/img1.jpg`; }
    else { var img = `/img0.jpg`; }

    return img;
  }

  notAttending (eventId) {
    return <button onClick={() => this.props.createRsvp(eventId).then(this.props.fetchEvent(eventId))} className="event-rsvp-no">Attend</button>
  }

  alreadyAttending (eventId) {
    return <button onClick={() => this.props.deleteRsvp(eventId).then( () => this.props.fetchEvent(eventId))}
    className="event-rsvp-yes"><i className="fas fa-times-circle"></i> Can't go</button>
  }

  whichRsvpButton () {
    if (this.props.event.attendeeIds.includes(this.props.currentUser.id)) {
      return this.alreadyAttending(this.props.event.id)
    } else {
      return this.notAttending(this.props.event.id)
    }
  };

  whichStatus () {
    if (this.props.event.attendeeIds.includes(this.props.currentUser.id)) {
      return "You're going!"
    } else {
      return "You're not going"
    }
  }

  toggleButtons () {
    if (this.props.event.attendeeIds.includes(this.props.currentUser.id)) {
      return (
        <div className="toggle-going">
          <button className="rsvp-selected" onClick={() => this.props.createRsvp(this.props.event.id).then(() => {
            return this.props.fetchEvent(this.props.event.id);
          })}>
           <i className="fas fa-check"></i></button>
          <button className="rsvp-not-selected" onClick={() => this.props.deleteRsvp(this.props.event.id)}>
           <i className="fas fa-times"></i></button>
        </div>
        ); 
      } else {
      return (
        <div className="toggle-going">
          <button className="rsvp-not-selected" onClick={() => this.props.createRsvp(this.props.event.id).then(() => {
            return this.props.fetchEvent(this.props.event.id);
          })}>
           <i className="fas fa-check"></i></button>
          <button className="rsvp-selected" onClick={() => this.props.deleteRsvp(this.props.event.id)}>
           <i className="fas fa-times"></i></button>
      </div>
      )
    }
  }

  render () {
    if (!this.props.event.host) return null;
    const eventPicId = (this.props.event.id + 5);

    const eventAttendees = this.props.event.attendees.map(attendee => {
      return (
          <li key={attendee.id}>
            <img src="https://image.flaticon.com/icons/png/128/149/149072.png"/>
            <p>{attendee.name}</p>
          </li>
      )
    });

    return (
      <>
      <div className="top-event-container">
        <div className="event-header-container">
        <div className="event-header">
        <div className="event-show-info">
          <span className="event-show-date">{this.props.event.date}</span>
          <span className="event-show-title">{this.props.event.title}</span>
          <div className="event-host-info">
            <img className="organizer-pic" src="https://image.flaticon.com/icons/svg/145/145850.svg"/>
            <div className="host-section">
              <span className="hosted">Hosted by</span>
              <span className="host-name">{this.props.event.host.name}</span>
            </div>
          </div>
        </div>
        </div>
        <div className="event-show-rsvp">
          <div className="rsvp-status">
            <span>{this.whichStatus()} &nbsp; </span>
            <p> &nbsp; {this.props.event.attendeesCount} going</p>
          </div>
          <div className="rsvp-buttons"></div>
            {this.toggleButtons()}
        </div>   
        </div>
      </div>

      <div className="main-event-bottom">
      <div className="event-bottom-container">
        <div className="event-bottom-left">
          <div className="img-div">
            <img src={this.whichPicture(eventPicId)} alt=""/>
          </div>
          <div className="event-show-details">Details:
            <p>{this.props.event.details}</p>
          </div>
          <div className="event-attendees">
            <h2>Attendees ({this.props.event.attendeesCount})</h2>
              <ul>{eventAttendees}</ul>
          </div>
        </div>
        <div className="event-bottom-right">
          <div className="event-group-info">
            <img src={this.whichPicture(this.props.event.group_id)} alt=""/>
            <div>
              <span className="event-show-group-title">{this.props.event.group.name}</span>
              <span className="group-type">Public Group</span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }


}

export default EventShow;