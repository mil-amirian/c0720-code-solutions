import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(prop) {
  return <button>{prop}</button>;
}

const element = CustomButton('Click Me!');

const htmlElement = document.getElementById('root');

ReactDOM.render(element, htmlElement);
