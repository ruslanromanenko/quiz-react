import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const loggedIn = localStorage.getItem('loggedIn');
  return(
    <Route {...rest} render={(props) => (
      loggedIn === 'true'
        ? <Component {...props} />
        : <Redirect to='/auth' />
    )} />
  );
};

export default PrivateRoute