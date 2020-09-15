import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.buttonText}</button>;
}

const htmlElement = document.getElementById('root');

ReactDOM.render(<CustomButton buttonText="Click Me!"/>, htmlElement);
