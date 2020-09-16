/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isPressed: true
    }));
  }

  render() {
    return <button onClick={this.handleClick}>
      {this.state.isPressed ? 'Thanks!' : 'Click Me!' }
    </button>;
  }
}

const button = <CustomButton />;

const parentElementForButton = document.getElementById('root');

ReactDOM.render(
  button,
  parentElementForButton
);
