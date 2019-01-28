import React from 'react';
import {withRouter} from 'react-router-dom';

class GroupIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/groups/${this.props.group.name}`)
  }

  render() {
    return (
      <li onClick={this.handleClick}>

      <div className="group-index-item">
        <div className="group-info">
          <span className="group-item-name">{this.props.group.name}</span>
        </div>
      </div>
      
      </li>
    )
  }
}

export default withRouter(GroupIndexItem);

