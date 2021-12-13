import {AdminLayout} from 'components/Layout';
import React from 'react';
import {RouteProps, Redirect} from 'react-router-dom';

export const PrivateRoute = (props: RouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn)
    return <Redirect to="/login" />;
  return (
    <AdminLayout />
  );
}

