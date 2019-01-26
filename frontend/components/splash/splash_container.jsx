;import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';

const msp = (state) => {
  return { 
    currentUser: state.entities.users[state.session.id], 
    // groups: state.entities.groups
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Splash);