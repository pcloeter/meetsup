import React from 'react';
import {withRouter} from 'react-router-dom';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/groups/${this.props.group.id}`)
  }

  render() {
    return (
      <li style={{backgroundImage: `url(${this.props.img})`}} onClick={this.handleClick}>

      <div className="group-index-item">
        <div className="group-info">
          <h4 id="group-item-name">{this.props.group.name}</h4>
          <h6 id="group-count">{this.props.group.membersCount} {this.props.group.name} Members!</h6>
        </div>
      </div>
      
      </li>
    )
  }
}

export default withRouter(GroupIndexItem);

