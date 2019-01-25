import React from "react";


class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
        <div className='session-form-container'>
        
            <form className="session-form" onSubmit={this.handleSubmit}>
              
              <div className="title-div">
                <h1>{this.props.formType}</h1>
                  {this.showErrors()}
                  <h4>{this.props.alt_message}{this.props.alt_link}</h4>
              </div>
             

                <div className='inputs-container'>

                  <div className="login-input">
                  <label htmlFor='form-email'>Email address:</label>
                    <input className="session-label" 
                      id="form-email"
                      type="text" 
                      value={this.state.email}
                      onChange={this.update('email')}/>
                  </div>

                  <div className="login-input">
                  <label htmlFor='form-password'>Password:</label>
                  <a href="">Forgot your password?</a>
                    <input className="session-label" 
                      id="form-password"
                      type="password" 
                      value={this.state.password}
                      onChange={this.update('password')}/>
                  </div>
                    
                  <div className="checkbox">
                    <input type="checkbox" checked readOnly/>
                    <span>Keep me signed in</span>
                </div>

                </div>

              <input className="login-button" type="submit" value={this.props.formType}/>

            </form>
            
        </div>
      </div>
    )
  }
}

export default LoginForm;