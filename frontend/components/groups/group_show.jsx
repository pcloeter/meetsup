import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
 
  constructor (props) {
    super(props);
    this.alreadyMember = this.alreadyMember.bind(this);
    this.notMember = this.notMember.bind(this);
    this.organizedGroup = this.organizedGroup.bind(this);
    this.whichButton = this.whichButton.bind(this);
    this.state = {true: true};
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
  }


  organizedGroup () {
    return (
      <button onClick={() => this.props.deleteGroup(this.props.match.params.groupId).then( () => {
        debugger
       this.props.history.push('/groups')})}
      className="membership-leave">Delete Group</button>
    )
  }

  alreadyMember () {
    return (
      <button onClick={() => this.props.deleteMembership(this.props.match.params.groupId).then( () => this.props.history.push('/groups'))} 
      className="membership-leave">Leave Group</button>
    )
  }

  notMember () {
    return (
      <button onClick={() => this.props.createMembership(this.props.match.params.groupId).then( () => this.props.history.push(this.props.group.id))} 
      className="membership-join">Join Group</button>  
    )
  }

  whichButton () {
    if (this.props.currentUser.id === this.props.organizer.id) {
      return this.organizedGroup();
    } else if (this.props.group.memberIds.includes(this.props.currentUser.id)) {
      return this.alreadyMember();
    } else {
      return this.notMember();
    }
  }
  
  groupEventsShow () {
    if (this.props.group.eventsCount === 0 ) {
      return <li>{this.props.group.name} has no events scheduled! :-( </li>
    } else {
      this.props.group.events.slice(2).forEach( event => {
        return (
          <div className="groupEventContainer">
          <div className="groupEventInfo">
            <div>
              <span>{event.date}</span>
              <span>{event.time}</span>
              <span>{event.title}</span>
              <span>{event.address}</span>
            </div>
            <div>
              <img src="https://image.flaticon.com/icons/png/128/149/149072.png"/>

            </div>
          </div>
          <p className="groupEventDescription">{event.description}</p>
          <div className="groupEventAttend">
            <div>

            </div>
          </div>
          </div>
        )
      })
    }
  }

  
  render () {
    if (!this.props.group) { return null };
    
    const group = this.props.group
      if (group.id % 10 === 9) { var img = `/img8.jpg`; }
      else if (group.id % 10 === 8) { var img = `/img9.jpg`; }
      else if (group.id % 10 === 7) { var img = `/img7.jpg`; }
      else if (group.id % 10 === 6) { var img = `/img6.jpg`; }
      else if (group.id % 10 === 5) { var img = `/img5.jpg`; }
      else if (group.id % 10 === 4) { var img = `/img4.jpg`; }
      else if (group.id % 10 === 3) { var img = `/img3.jpg`; }
      else if (group.id % 10 === 2) { var img = `/img2.jpg`; }
      else if (group.id % 10 === 1) { var img = `/img1.jpg`; }
      else { var img = `/img0.jpg`; }

    const groupMembers = this.props.members.map(member => {
      return (
          <li key={member.id}>
            <img src="https://image.flaticon.com/icons/png/128/149/149072.png"/>
            <p>{member.name}</p>
          </li>
      )
    });
    
    

    return (
      <div>

      <div className="main-top">
        <div className="show-head-container">
            <img style={{backgroundImage: `url(${img})`}}className="group-show-pic" />
            <div className="group-show-info">
              <p className="group-title">{this.props.group.name}</p>
              <p className="show-info">&#127760; {this.props.group.city}</p>
              <p className="show-info">	&#128107; {this.props.group.membersCount}</p>
              <p className="show-info">&#128483; {this.props.organizer.name}</p>
            </div>
          </div>
      </div>

        <div className="group-menu">
        <div className="group-menu-container">
          <p className="group-menu-item-left">About</p>
          <Link to={`/groups/${this.props.group.id}/events`}className="group-menu-item">Events</Link>
          <Link to={`/groups/${this.props.group.id}/members`}className="group-menu-item">Members</Link>
          <div>
          {this.whichButton()}
          </div>
          </div>
        </div>

<div className="main-bottom">
        <div className="show-content-container">
          <div className="show-left">
            <div className="group-about">
              <h2>What we're about</h2>
              <p>{this.props.group.description}</p>
            </div>

            <div className="group-events">
              <h2>Upcoming Events</h2>
              <ul className="group-events-list">
                {/* <li>{this.props.group.name} has no events scheduled! :-( </li> */}
              </ul>
            </div>

          </div>

          <div className="show-right">

            <div className="group-organizer">
              <h2>Organizer</h2>
              <img className="organizer-pic" src="https://image.flaticon.com/icons/svg/145/145850.svg"/>
              <p>{this.props.organizer.name}</p>
            </div>

            <div className="group-members">
              <h2>Members ({this.props.group.membersCount})</h2>
                <ul>{groupMembers}</ul>
            </div>

          </div>

         </div>
        </div>

      </div>
    )
  }

}

export default GroupShow;