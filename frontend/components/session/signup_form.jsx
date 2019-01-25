import React from "react";


class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.formAction(user);
  }

  update (field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  showErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
            return <li key={`error-${idx}`}>{error}</li>
          }
        )}
      </ul>
    )
  }

  render () {
    return (
      <div className="session-container">
      <div className="session-form-container">
      
        <form className="session-form" onSubmit={this.handleSubmit}>

        <header className='sign-up'>{this.props.formType}</header>
          {this.showErrors()}


          <label>Name
            <input className="session-label" 
              type="text" 
              value={this.state.name}
              onChange={this.update('name')}/>
          </label>

          <label>Email address
            <input className="session-label" 
              type="text" 
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          <label>Password
            <input className="session-label" 
              type="password" 
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <p className="name-disclaimer">Your name is public. We'll use your email address to send you <br />
          updates, and your location to find MeetSups near you.</p>

          <input className="submit-button" type="submit" value="Continue"/>
          

          <p className="button-disclaimer">When you "Continue", you agree to MeetSup's Terms of Service. We <br/>
          will manage information about you as described in our Privacy <br/>Policy, and Cookie Policy.</p>
              <h4>{this.props.alt_message}{this.props.alt_link}</h4>
        </form>
      </div>
      </div>
    )
  }
}

export default SignupForm;