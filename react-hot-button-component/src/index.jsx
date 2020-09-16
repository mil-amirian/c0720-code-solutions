import React from 'react';
import ReactDOM from 'react-dom';

class RenderButton extends React.Component {
  constructor(props) {
    super(props);
    this.clickCount = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.clickCount++;
    if (this.clickCount === 3) {
      event.target.style.backgroundColor = 'purple';
      event.target.style.color = 'white';
    } else if (this.clickCount === 6) {
      event.target.style.backgroundColor = 'mediumOrchid';
      event.target.style.color = 'white';
    } else if (this.clickCount === 9) {
      event.target.style.backgroundColor = 'crimson';
      event.target.style.color = 'white';
    } else if (this.clickCount === 12) {
      event.target.style.backgroundColor = 'orange';
      event.target.style.color = 'black';
    } else if (this.clickCount === 15) {
      event.target.style.backgroundColor = 'yellow';
      event.target.style.color = 'black';
    } else if (this.clickCount === 18) {
      event.target.style.backgroundColor = 'white';
      event.target.style.color = 'black';
    }
  }

  render() {
    return <button onClick={this.handleClick}>
          Hot Button
    </button>;
  }

}

const button = <RenderButton />;

const parentElementForButton = document.getElementById('root');

ReactDOM.render(
  button,
  parentElementForButton
);
