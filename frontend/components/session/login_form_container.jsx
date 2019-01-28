import {connect} from 'react-redux';
import LoginForm from './login_form';
import { login, loginDemoUser } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';


const msp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Log in',
    alt_message: 'Not registered with us yet? ',
    alt_link: <Link to="/signup" className='session-link'>Sign up.</Link>
  }
};

const mdp = (dispatch) => {
  return{
    formAction: (user) => dispatch(login(user)),
    loginDemoUser: () => dispatch(loginDemoUser()),
  }
};

export default connect(msp, mdp)(LoginForm);