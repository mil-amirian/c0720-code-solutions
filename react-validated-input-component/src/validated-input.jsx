import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: 'start',
      userPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      userPassword: event.target.value
    });
    event.preventDefault();
  }

  handleChange(event) {
    if (event.target.value.length >= 8) {
      this.setState({
        entry: 'pass'
      });
    } else if (event.target.value.length === 0) {
      this.setState({
        entry: 'empty'
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        entry: 'short'
      });
    }
  }

  render() {
    if (this.state.entry === 'empty') {
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Password</label>
          <div className="input-container">
            <input type="password" className="input" value={this.state.handleSubmit} onChange={this.handleChange}/>
            <input type="submit" value="Sign In"/>
            <img src="./wrong.png" className="wrong" />
            <img src="./right.png" className="right hidden"/>
          </div>

          <div className="status-wrong">A password is required</div>
          <div className="status-short hidden">Your password is too short</div>
        </form>
      );
    } else if (this.state.entry === 'short') {
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Password</label>
          <div className="input-container">
            <input type="password" className="input" value={this.state.handleSubmit} onChange={this.handleChange}/>
            <input type="submit" value="Sign In"/>
            <img src="./wrong.png" className="wrong" />
            <img src="./right.png" className="right hidden"/>
          </div>

          <div className="status-wrong hidden">A password is required</div>
          <div className="status-short">Your password is too short</div>
        </form>
      );
    } else if (this.state.entry === 'pass') {
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Password</label>
          <div className="input-container">
            <input type="password" className="input" value={this.state.handleSubmit} onChange={this.handleChange} />
            <input type="submit" value="Sign In"/>
            <img src="./wrong.png" className="wrong hidden" />
            <img src="./right.png" className="right"/>
          </div>

          <div className="status-wrong hidden">A password is required</div>
          <div className="status-short hidden">Your password is too short</div>
        </form>
      );
    } else {
      return (
        <form className="container" onSubmit={this.handleSubmit}>
          <label>Password</label>
          <div className="input-container">
            <input type="password" className="input" value={this.state.handleSubmit} onChange={this.handleChange}/>
            <input type="submit" value="Sign In"/>
            <img src="./wrong.png" className="wrong hidden" />
            <img src="./right.png" className="right hidden"/>
          </div>

          <div className="status-wrong hidden">A password is required</div>
          <div className="status-short hidden">Your password is too short</div>
        </form>
      );
    }

  }
}

export default ValidateInput;
