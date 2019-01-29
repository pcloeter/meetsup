import React from "react";
import {Link} from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }


  loggedOutNav () {
      return (
        <div className='navbar'>
  
        <div className='logo-container'>
          <Link to={'/'} className='logo'>Meet.Sup?</Link>
        </div>
  
          <div className="nav-links">
            <nav >
            <Link to={'/create'} id="group-create">Start a new group</Link>
            </nav>
  
            <nav className="signup-login">
            <Link to='/login' className='nav-link'>Log in</Link>
            <Link to='/signup' className='nav-link'>Sign up</Link>      
            </nav>
  
          </div>
        </div>
      )
  };

  loggedInNav () {
    return(
      <div className='navbar'>
  
        <div className='logo-container'>
          <Link to={'/'} className='logo'>Meet.Sup?</Link>
        </div>
  
          <div className="nav-links">
            <nav >
            <Link to={'/create'} id="group-create">Start a new group</Link>
            </nav>
  
            <nav className="signup-login">
            <button onClick={this.props.logout}>Log Out</button>     
            </nav>
  
          </div>
        </div>
    )
  }

  render() {
    return (
      <>
      {this.props.loggedIn ? this.loggedInNav() : this.loggedOutNav()}
      </>
    )
  }



}




export default Nav;