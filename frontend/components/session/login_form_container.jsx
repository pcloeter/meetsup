import {connect} from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';


const msp = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'Login',
    alt_message: 'Not registered with us yet? ',
    alt_link: <Link to="/signup">Sign up.</Link>
  }
};

const mdp = (dispatch) => {
  return{
    formAction: (user) => dispatch(login(user))
  }
};

export default connect(msp, mdp)(LoginForm);