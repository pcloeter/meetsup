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
      address:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = Object.assign({}, this.state);
    this.props.createEvent(event).then( event => {
      this.props.history.push(`/groups/${this.props.group_id}/events/`);
    }
  )}
  
  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  render () {
    return (
      <div className="create-group-container">

        <div className="create-banner">
          <h1 className="create-title">Create a New Group Event!</h1>
          <span className="group-span"></span>
        </div>

      <div className="create-group-section">
      <form className="create-form" onSubmit={this.handleSubmit}>


            <div className='create-group-inputs-container'>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <span className="step-span">Step 1 of 5</span>
              <label htmlFor='form-title'> What's The Title of your Event? </label>
                  <input 
                    id="form-title"
                    type="title" 
                    value={this.state.title}
                    onChange={this.update('title')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <span className="step-span">Step 2 of 5</span>
              <label htmlFor='form-date'>What's the Date of your Event?</label>
                  <input 
                    id="form-date"
                    type="date" 
                    value={this.state.date}
                    onChange={this.update('date')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/545971442246927/start_v2/tag.svg"/>
                <span className="step-span">Step 3 of 5</span>
              <label htmlFor='form-time'>What Time is your Event?</label>
                  <input 
                    id="form-time"
                    type="time" 
                    value={this.state.time}
                    onChange={this.update('time')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/322408653975454564695/start_v2/textBubbles.svg"/>
                <span className="step-span">Step 4 of 5</span>
              <label htmlFor='form-details'> What are the Details of your Event?</label>
                  <textarea 
                    id="form-details"
                    type="text" 
                    value={this.state.details}
                    onChange={this.update('details')}/>
            </div>

            <div className="create-group-input">
            <img className="create-icon" src="https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg"/>
                <span className="step-span">Step 5 of 5</span>
              <label htmlFor='form-address'> Please Add Location Information </label>
                  <input 
                    id="form-address"
                    type="address" 
                    value={this.state.address}
                    onChange={this.update('address')}/>
            </div>
                  

            </div>
          <p className="create-disclaimer">Once you submit, this event will be visible to all members</p>
          <input className="create-submit-button" type="submit" value="Create This Event!"/>
        
      </form>
      </div>
      </div>
    )
  };

}

export default CreateEvent;