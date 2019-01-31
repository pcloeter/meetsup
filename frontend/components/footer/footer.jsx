import React from "react";
import {Link} from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then( () => {
       this.props.history.push('/login');
    })
  }

  loggedOutFooter () {
    return (
      <div className="footer-container">
      <div className="center-footer-container">
      
        <div className="top-footer">
          <div className="action-footer">
            <Link to={'/create'} id="create-group-footer">Start a new group</Link>
            <Link to={'login'}>Log In</Link>
          </div>
        </div>

        <div className='bottom-footer'>


          <div className="links-footer">
            <a href="https://www.linkedin.com/in/pdcloeter" target="_blank">Paul's LinkedIn</a>
            <a href="https://www.linkedin.com/in/pdcloeter" target="_blank"> Paul's GitHub</a>
            <a href="https://www.meetup.com" target="_blank">MeetUp</a>
          </div>
          <p className="disclaimer-footer">© 2019 Meet.Sup?  Meet.Sup? is an application wholly and soley created for educational and demostrational purposes.</p>
      </div>
      </div>
    </div>
    )
  }

  loggedInFooter () {
    return (
      <div className="footer-container">
      <div className="center-footer-container">
      
        <div className="top-footer">
          <div className="action-footer">
            <Link to={'/create'} id="create-group-footer">Start a new group</Link>
            <button onClick={this.handleClick}>Log Out</button>
          </div>
        </div>

        <div className='bottom-footer'>


          <div className="links-footer">
            <a href="https://www.linkedin.com/in/pdcloeter" target="_blank">Paul's LinkedIn</a>
            <a href="https://www.linkedin.com/in/pdcloeter" target="_blank">Paul's GitHub</a>
            <a href="https://www.meetup.com" target="_blank">MeetUp</a>
          </div>
          <p className="disclaimer-footer">© 2019 Meet.Sup?  Meet.Sup? is an application wholly and soley created for educational and demostrational purposes.</p>
      </div>
      </div>
    </div>
    )
  }

  render() {
    return (
      <>
      {this.props.footerLoggedIn ? this.loggedInFooter() : this.loggedOutFooter()}
      </>
    )
  }


}

export default Footer;