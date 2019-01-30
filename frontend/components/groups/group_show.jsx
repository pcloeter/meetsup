import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
 
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId)
  }


  // showMembers () {
  //   this.props.group.members.slice(15).map( member => {
  //     return (
  //       <li>
  //         <img src="" alt=""/>
  //       </li>
  //     )
  //   })
  // }


  render () {
    if (!this.props.group) { return null };
    
    return (
      <div>


        <div className="show-head-container">
            <img className="group-show-pic" />
            <div className="group-show-info">
              <p className="group-title">{this.props.group.name}</p>
              <p className="show-info">&#127760; {this.props.group.city}</p>
              <p className="show-info">	&#128107; {this.props.group.membersCount}</p>
              <p className="show-info">&#128483; {this.props.organizer}</p>
            </div>
          </div>

          <div className="group-menu">
          <p className="group-menu-item">About</p>
          <Link to={`/${this.props.group.id}/events`}className="group-menu-item">Events</Link>
          <Link to={`/${this.props.group.id}/members`}className="group-menu-item">Members</Link>
            <div className="dropdown">
              <button className="dropdown-text">You're a member</button>
              <div className="dropdown-content">
              <p>Hello World!</p>
              </div>
            </div>
          </div>

        <div className="show-content-container">

          <div className="show-left">
            <div className="group-about">
              <h2>What we're about</h2>
              <p>{this.props.group.description}</p>
            </div>

            <div className="group-events">
              <h2>Upcoming Events</h2>
              <ul>
                EVENT LIST ITEM
              </ul>
            </div>

          </div>

          <div className="show-right">

            <div className="group-organizer">
              <h2>Organizer</h2>
              <img className="organizer-pic" src=""/>
              <p>{this.props.organizerName}</p>
            </div>

            <div className="group-members">
              <h2>Members ({this.props.group.membersCount})</h2>
              <ul>
                MEMBERS LIST ITEM
              </ul>
            </div>

          </div>

         </div>

      </div>
    )
  }

}

export default GroupShow;