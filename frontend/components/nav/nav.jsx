import React from "react";
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
      <div>
        <nav className="signup-login">
        <Link to={'/login'}>Log in</Link>
        <Link to={'/signup'}>Sign up</Link>      
        </nav>
        <nav className="group-create">
        <Link to={'/create'}>Start a new group</Link>
        </nav>
      </div>
    )
};


export default Nav;