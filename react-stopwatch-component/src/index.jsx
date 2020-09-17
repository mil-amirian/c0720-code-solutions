import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: 'stopped',
      secs: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  handleClick() {
    this.startTimer();
    this.setState(state => ({
      isRunning: 'running'
    }));
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.timerIncrease();
    }, 1000);
  }

  timerIncrease() {
    this.setState(state => ({
      secs: state.secs + 1
    }));
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState(state => ({
      isRunning: 'paused'
    }));
  }

  resetTimer() {
    this.setState(state => ({
      isRunning: 'stopped',
      secs: 0
    }));
  }

  render() {
    if (this.state.isRunning === 'stopped') {
      return (
        <div className="container">
          <div className="clockface">
            <div className="timer">{this.state.secs}</div>
          </div>
          <div className="status" onClick={this.handleClick}>Play</div>
        </div>
      );
    } else if (this.state.isRunning === 'running') {
      return (
        <div className="container">
          <div className="clockface">
            <div className="timer">{this.state.secs}</div>
          </div>
          <div className="status" onClick={this.stopTimer}>Pause</div>
        </div>
      );
    } else if (this.state.isRunning === 'paused') {
      return (
        <div className="container">
          <div className="clockface" onClick={this.resetTimer}>
            <div className="timer">{this.state.secs}</div>
          </div>
          <div className="status" onClick={this.handleClick}>Play</div>
        </div>
      );
    }
  }
}

const parentElementForButton = document.getElementById('root');
const timer = <Timer />;

ReactDOM.render(
  timer,
  parentElementForButton
);
