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
      <div className="group-index-item"
            onClick={this.handleClick}>
        <div className="group-info">
          <span className="group-name">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(GroupIndexItem);

