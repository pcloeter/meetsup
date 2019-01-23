import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session_api_util'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Welcome to Meet. Sup?</h1>, document.getElementById('root'));
})