import React from "react";
import DayPicker from 'react-day-picker';


class GroupEvents extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.whichEvents = this.whichEvents.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.today = new Date();
    this.months = new Array();
      this.months[0] = "January";
      this.months[1] = "February";
      this.months[2] = "March";
      this.months[3] = "April";
      this.months[4] = "May";
      this.months[5] = "June";
      this.months[6] = "July";
      this.months[7] = "August";
      this.months[8] = "September";
      this.months[9] = "October";
      this.months[10] = "November";
      this.months[11] = "December";
    this.month = this.months[this.today.getMonth()];
    this.state = {
      month: this.month,
      selectedDay: undefined,
    };
  }

  componentDidMount () {
    this.props.fetchEvents()
  }

  handleClick(groupId) {
    return () => this.props.history.push(`/groups/${groupId}`)
  }

  handleMonthChange(date) {
    this.setState({ 
      month: this.months[date.getMonth()],
      selectedDay: undefined 
    });
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
    const dateDay = (event) => parseInt(event.date.slice(8));
    if (!this.state.selectedDay) {
      let displayEvents = this.props.events.filter (event => Boolean(event.formattedDate.includes(this.state.month)));
      displayEvents = displayEvents.sort((a, b) => dateDay(a) - dateDay(b));
      return displayEvents
    } else if (this.state.selectedDay) {
      const selectedDay = this.state.selectedDay.getDate().toString();
      const selectedMonth = this.months[this.state.selectedDay.getMonth()];
      
      const displayEvents = this.props.events.filter ( event => {
        const dateLength = event.formattedDate.length;
        const firstDigit = event.formattedDate[dateLength - 8];
        const secondDigit = event.formattedDate[dateLength - 7];
        const dateDigits = firstDigit.concat(secondDigit);
        return Boolean((dateDigits === selectedDay) && event.formattedDate.includes(selectedMonth));
      })
      return displayEvents
    } else {
      return [];
    }
  } 
  
  eventIndexShow () {
    if (!this.props.events) { return null };
    if (this.whichEvents().length === 0) {
      return <li id="no-events">No events scheduled! :-( </li>
        
      } else {
        const eventItems = this.whichEvents().map( event => {
        const groupName = (!event.group) ? null : event.group.name
        
        return(
        <li id="event-list" className="group-events-show" 
          key={event.id}
          onClick={this.handleClick(event.group_id)}
          >
        <div className="group-event-container">
        <div className="group-event-info">
          <div className="group-event-details">
            <span id="date">{event.formattedDate} {event.formattedTime}</span>
            <h4 className="events-group">{groupName}</h4>
            <span id="title">{event.title}</span>
            <span id="address">{event.attendeesCount} {groupName} Members Going</span>
          </div>
        </div>
        {/* <p id="group-event-description">{event.details}</p> */}
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
          onMonthChange={this.handleMonthChange}
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