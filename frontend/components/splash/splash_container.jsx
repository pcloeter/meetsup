;import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Splash from './splash';
import { fetchGroups } from '../../actions/group_actions'

const msp = (state) => {
  return { 
    currentUser: state.entities.users[state.session.id], 
    groups: state.entities.groups
  }
}

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchGroups: () => dispatch(fetchGroups())
  }
}

export default connect(msp, mdp)(Splash);