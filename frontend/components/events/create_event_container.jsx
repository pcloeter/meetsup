import { connect } from 'react-redux';
import CreateEvent from './create_event';
import { createEvent } from '../../actions/event_actions';

const msp = (state, ownProps) => {
  const host_id = state.session.id;
debugger
  return {
    group_id: ownProps.match.params.groupId,
    host_id
  }
}

const mdp = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(msp, mdp)(CreateEvent);
