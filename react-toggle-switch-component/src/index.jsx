import ReactDOM from 'react-dom';
import React from 'react';
import Toggle from './toggle-switch';

const parentElementForButton = document.getElementById('root');
const button = <Toggle />;

ReactDOM.render(
  button,
  parentElementForButton
);
