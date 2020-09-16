import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }

  render() {
    if (this.state.isOn) {
      return (
        <div className='container' onClick={this.handleClick}>
          <div className='outer-on'>
            <div className='inner-on'></div>
          </div>
          <div className='state'>ON</div>
        </div>
      );
    } else {
      return (
        <div className='container' onClick={this.handleClick}>
          <div className='outer-off'>
            <div className='inner-off'></div>
          </div>
          <div className='state'>OFF</div>
        </div>
      );
    }
  }

}

const button = <Toggle />;

export default button;
