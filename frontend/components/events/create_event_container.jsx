import { connect } from 'react-redux';
import CreateEvent from './create_event';
import { createEvent } from '../../actions/event_actions';

const msp = (state) => {
  return {
    host_id: state.session.id
  }
}

const mdp = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(msp, mdp)(CreateEvent);
