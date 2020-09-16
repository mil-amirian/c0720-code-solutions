import React from 'react';
import ReactDOM from 'react-dom';

class RenderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clickCount: state.clickCount + 1
    }));
  }

  render() {
    if (this.state.clickCount === 3) {
      return <button className='purple' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else if (this.state.clickCount === 6) {
      return <button className='orchid' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else if (this.state.clickCount === 9) {
      return <button className='crimson' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else if (this.state.clickCount === 12) {
      return <button className='orange' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else if (this.state.clickCount === 15) {
      return <button className='yellow' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else if (this.state.clickCount === 18) {
      return <button className='white' onClick={this.handleClick}>
                Hot Button
      </button>;
    } else {
      return <button onClick={this.handleClick}>
                Hot Button
      </button>;
    }
  }
}

const button = <RenderButton />;

const parentElementForButton = document.getElementById('root');

ReactDOM.render(
  button,
  parentElementForButton
);
