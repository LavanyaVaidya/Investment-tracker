import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? <Route {...props} /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
