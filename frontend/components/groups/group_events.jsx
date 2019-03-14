import React from "react";
import DatePicker from "react-datepicker";
import DayPicker from 'react-day-picker';


class GroupEvents extends React.Component {
  constructor (props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.today = new Date();
      const months = new Array();
      months[0] = "January";
      months[1] = "February";
      months[2] = "March";
      months[3] = "April";
      months[4] = "May";
      months[5] = "June";
      months[6] = "July";
      months[7] = "August";
      months[8] = "September";
      months[9] = "October";
      months[10] = "November";
      months[11] = "December";
    this.month = months[this.today.getMonth()];
    this.state = {
      month: this.today.getMonth(),
      selectedDay: undefined,
    };
  }

  componentDidMount () {
    this.props.fetchEvents()
  }

  onMonthChange() {
    this.setState({ month: undefined });
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  whichEvents() {

  }

  eventIndexShow () {
    if (!this.props.events) { return null };
    if (!this.props.events.count) {
      return <li id="noEvents">No events scheduled! :-( </li>
        
      } else {
        const eventItems = this.whichEvents().map( event => {

        return(
        <li className="group-events-show" key={event.id}>
        <div className="group-event-container">
        <div className="group-event-info">
          <div className="group-event-details">
            <span id="date">{event.formattedDate} {event.formattedTime}</span>
            <span id="title">{event.title}</span>
            <span id="address">	&#x261e; {event.address}</span>
          </div>
        </div>
        <p id="group-event-description">{event.details}</p>
        </div>
        </li>
        )
      })
      return eventItems;
    }
  };

  render() {
    return (
      <>
      <div className="main-group-events-container">
      <div className="find-banner">
        <h1 className="find-title">Find an Upcoming Event!</h1>
      </div>
      <div className="banner-mid-container">
      <div className="banner-nav-banner">
      <div className="banner-search"></div>
      <div className="banner-buttons">
        <a href="#/groups/"><div className="groups-button">Groups</div></a>
        <a href=""><div className="cal-button">Calendar</div></a>
      </div>
      </div>
      </div>
      </div>


      <div className="main-events-bottom">
      <div className="events-bottom-container">
      <div className="events-left-list">
      <ul className="group-events-list">
        {this.eventIndexShow()}
      </ul>
      </div>
      <div className="calendar">
      <div>
        <DayPicker 
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
      </div>
      </div>
      </div>
      </div>
      </>
    )
  }
  
  
}

export default GroupEvents;