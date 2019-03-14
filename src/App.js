import React, { Component } from 'react';
import QuizCheckbox from './containers/QuizCheckbox/QuizCheckbox';
import Quiz from './containers/QuizRadio/QuizRadio';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute/PrivateRoute";
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import LogOut from "./containers/LogOut/LogOut";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Home } exact/>
        <PrivateRoute path="/quiz" component={ Quiz }/>
        <Route path="/auth" component={ Auth }/>
        <Route path="/log-out" component={ LogOut }/>

        <Route path="/quiz-checkbox" render={() => (
          <QuizCheckbox
          />
        )}/>
      </Switch>
    );
  }
}

export default App;
