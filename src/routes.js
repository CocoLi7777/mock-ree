import React, { lazy } from 'react';
import { Redirect } from 'react-router';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];
