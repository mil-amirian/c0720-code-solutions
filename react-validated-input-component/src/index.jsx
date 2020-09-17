import React from 'react';
import ReactDOM from 'react-dom';
import ValidateInput from './validated-input';

const parentElementForButton = document.getElementById('root');
const validate = <ValidateInput />;

ReactDOM.render(
  validate,
  parentElementForButton
);
