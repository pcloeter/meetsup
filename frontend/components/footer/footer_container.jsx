import {connect} from "react-redux";
import Footer from './footer';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    footerLoggedIn: Boolean(state.session.id)
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(Footer);