import React from 'react';
import ReactDOM from 'react-dom';

const createElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(createElement, document.getElementById('root'));
