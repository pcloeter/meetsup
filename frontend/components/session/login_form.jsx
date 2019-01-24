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
        <form className="session-form" onSubmit={this.handleSubmit}>

        <header>{this.props.formType}</header>
          {this.showErrors()}

          <h4>{this.props.alt_message}{this.props.alt_link}</h4>

          <label>Email address:
            <input className="session-label" 
              type="text" 
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>

          <label>Password:
            <input className="session-label" 
              type="password" 
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>

          <input type="submit" value={this.props.formType}/>

        </form>
      </div>
    )
  }
}

export default LoginForm;