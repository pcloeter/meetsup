import React from 'react';
import NavContainer from "./nav/nav_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashContainer from './splash/splash_container';
import { Route, HashRouter, Switch} from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import GroupIndexContainer from './groups/group_index_container';
import CreateGroupContainer from './groups/create_group_container';
import GroupShowContainer from './groups/group_show_container';
import FooterContainer from './footer/footer_container';

const App = () => (
  <div>
    <header>
        <Route path="/" component={NavContainer} />
    </header>

    <Switch>
      <ProtectedRoute exact path="/create" component={CreateGroupContainer} />
      <Route exact path="/groups" component={GroupIndexContainer} />
      <Route exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute path="/groups/:groupId" component={GroupShowContainer} />
    </Switch>

    <footer>
      <Route path="/" component={FooterContainer} />
    </footer>
  </div>
);

export default App;