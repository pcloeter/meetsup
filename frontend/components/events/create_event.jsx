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

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event).then( event => {
      this.props.history.push(`events/`);
    }
  )}
  
  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }



}

export default CreateEvent;