import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    debugger
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render () {
    if (!this.props.event) return null;
debugger
    return (
      <div>
        <div className="event-header-container">HELLO
        <div className="event-header">HELLO!
        <div className="event-show-info">
          <span className="event-show-date"></span>
          <span className="event-show-title"></span>
        </div>
        <div className="event-host-info">
          <img className="organizer-pic" src="https://image.flaticon.com/icons/svg/145/145850.svg"/>
          <div className="host-section">
            <span>Hosted by</span>
            <span></span>
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