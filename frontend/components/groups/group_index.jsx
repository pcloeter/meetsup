import React from 'react';
import GroupIndexItem from '../groups/group_index_item';

class GroupIndex extends React.Component {

 componentDidMount() {
   this.props.fetchGroups();
 }

 render() {
    const groups = this.props.groups.map(group => {
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
      
      return (
        <GroupIndexItem
        key={group.id}
        group={group}
        img={img}
        ></GroupIndexItem>
      )
    });

    return (
      <div className="main-groups-container">
      <div className="find-banner">
        <h1 className="find-title">Find a Meet.Sup?</h1>
      </div>
      <div className="banner-mid-container">
      <div className="banner-nav-banner">
      <div className="banner-search"></div>
      <div className="banner-buttons">
        <a href=""><div className="cal-button">Groups</div></a>
        <a href="#/events/"><div className="groups-button">Calendar</div></a>
      </div>
      </div>
      </div>

        <div className="groups-section">
        <h4 className="suggested">SUGGESTED MEETUPS</h4>
          <ul className="groups-container">
              {groups}
          </ul>
        </div>
      </div> 
    )


 }


};




export default GroupIndex;