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
      <div className="signup-container">
      <div className="signup-form-container">
      
        <h1 className='sign-up'>Sign up</h1>
          <div className="demo-button-contatiner">
            <button onClick={() => this.props.login({email: "darthv@gmail.com", password: 'hellothere'})} id="demo-button">Log in with Demo User</button>
            </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>

          {this.showErrors()}



            <div className='signup-inputs-container'>

            <div className="signup-input">
                <label htmlFor='form-name'>Your name</label>
                  <input className="signup-label" 
                    id="form-name"
                    type="text" 
                    value={this.state.name}
                    onChange={this.update('name')}/>
                </div>

                <div className="signup-input">
                <label htmlFor='form-email'>Email address</label>
                  <input className="signup-label" 
                    id="form-email"
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}/>
                </div>

                <div className="signup-input">
                <label htmlFor='form-password'>Password</label>

                  <input className="signup-label" 
                    id="form-password"
                    type="password" 
                    value={this.state.password}
                    onChange={this.update('password')}/>
                </div>
                  

                </div>

          <p className="name-disclaimer">Your name is public. We'll use your email address to send you <br />
          updates, and your location to find MeetSups near you.</p>

          <input className="submit-button" type="submit" value="Continue"/>
          

          <p className="button-disclaimer">When you "Continue", you agree to MeetSup's Terms of Service. We <br/>
          will manage information about you as described in our Privacy <br/>Policy, and Cookie Policy.</p>
        
        <div className="otherwise">
              <h4 id="otherwise-alt">{this.props.alt_message}{this.props.alt_link}</h4>
        </div>

        </form>


      </div>
      </div>
    )
  }
}

export default SignupForm;