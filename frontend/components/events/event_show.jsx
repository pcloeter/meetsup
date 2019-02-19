import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    if (!this.props.event) { return null };

    return (
      <div>
        <div className="event-header-container">
        <div className="event-header">
        <div className="event-show-info">
          <span className="event-show-date">{this.props.event.date}</span>
          <span className="event-show-title">{this.props.event.title}</span>
        </div>
        <div className="event-host-info">
          <img className="organizer-pic" src="https://image.flaticon.com/icons/svg/145/145850.svg"/>
          <div className="host-section">
            <span>Hosted by</span>
            <span>{this.props.host}</span>
          </div>
        </div>
        </div>
        <div className="event-show-rsvp"></div>
        </div>
      </div>
    )
  }


}

export default EventShow;