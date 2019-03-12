import { connect } from "react-redux";
import GroupEvents from "./group_events";
import { fetchEvents } from "../../actions/event_actions";

const msp = (state) => {
  return {
    events: Object.values(state.entities.events)
  }
};

const mdp = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}

export default connect(msp, mdp)(GroupEvents)