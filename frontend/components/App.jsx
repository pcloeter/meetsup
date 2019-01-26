import React from 'react';
import NavContainer from "./nav/nav_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import { Route, HashRouter, Switch} from 'react-router-dom';

const App = () => (
  <div>
    <header>
        <NavContainer/>
    </header>

    <Switch>
      <Route exact path='/' component={SplashContainer} />
      <Route exact path='/login' component={LoginFormContainer} />
      <Route exact path='/signup' component={SignupFormContainer} />
    </Switch>

  </div>
);

export default App;