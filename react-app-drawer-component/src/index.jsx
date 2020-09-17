import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const parentElementForButton = document.getElementById('root');
const appdrawer = <AppDrawer />;

ReactDOM.render(
  appdrawer,
  parentElementForButton
);
