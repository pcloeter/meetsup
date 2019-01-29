import { connect } from 'react-redux';
import CreateGroup from './create_group'; 
import React from 'react';
import {createGroup} from '../../actions/group_actions';


const msp = (state) => {
  return {
    organizer_id: state.session.id,
  }
};

const mdp = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group))
  }
};

export default connect(msp, mdp)(CreateGroup);