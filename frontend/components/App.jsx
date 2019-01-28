import React from 'react';
import NavContainer from "./nav/nav_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import { Route, HashRouter, Switch} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GroupIndexContainer from './groups/group_index_container';
import CreateGroupContainer from './groups/create_group_container';

const App = () => (
  <div>
    <header>
        <NavContainer/>
    </header>

    <Switch>
      <Route exact path="/create" component={CreateGroupContainer} />
      <Route exact path="/groups" component={GroupIndexContainer} />
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
    </Switch>

  </div>
);

export default App;