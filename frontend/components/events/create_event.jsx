import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateEvent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      host_id: props.host_id,
      group_id: props.group_id,
      title:"",
      details:"",
      date:"",
      time:"",
      picture_url:"",
      address:"",
    }
  }
}