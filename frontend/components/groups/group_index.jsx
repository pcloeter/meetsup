import React from 'react';
import GroupIndexItem from '../groups/group_index_item';

class GroupIndex extends React.Component {

 componentDidMount() {
   this.props.fetchGroups();
 }

 render() {
    const groups = this.props.groups.map(group => {
      return (
        <GroupIndexItem
        key={group.id}
        group={group}
        >hi</GroupIndexItem>
      )
    });

    return (
      <div className="main-groups-container">

        <div className="find-banner">
          <h1 className="find-title">Find a Meetup</h1>
          {/* <span className="extra-span">Extra info</span> */}
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