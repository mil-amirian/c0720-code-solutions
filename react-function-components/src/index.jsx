import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

const htmlElement = document.getElementById('root');

ReactDOM.render(<CustomButton />, htmlElement);
