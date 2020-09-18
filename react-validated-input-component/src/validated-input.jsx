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
    this.NoMoreRepeatedCode = this.NoMoreRepeatedCode.bind(this);
    this.ConditionalStatuses = this.ConditionalStatuses.bind(this);
    this.ConditionalImages = this.ConditionalImages.bind(this);
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

  NoMoreRepeatedCode() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <label>Password</label>
        <div className="input-container">
          <input type="password" className="input" value={this.state.handleSubmit} onChange={this.handleChange}/>
          <input type="submit" value="Sign In"/>
          <this.ConditionalImages />
        </div>
        <this.ConditionalStatuses />
      </form>
    );
  }

  ConditionalStatuses() {
    if (this.state.entry === 'empty') {
      return (
        <>
          <div className="status-wrong">A password is required</div>
          <div className="status-short hidden">Your password is too short</div>
        </>
      );
    } else if (this.state.entry === 'short') {
      return (
        <>
          <div className="status-wrong hidden">A password is required</div>
          <div className="status-short">Your password is too short</div>
        </>
      );
    } else if (this.state.entry === 'pass' || this.state.entry === 'start') {
      return (
        <>
          <div className="status-wrong hidden">A password is required</div>
          <div className="status-short hidden">Your password is too short</div>
        </>
      );
    }

  }

  ConditionalImages() {
    if (this.state.entry === 'empty' || this.state.entry === 'short') {
      return (
        <>
          <img src="./wrong.png" className="wrong" />
          <img src="./right.png" className="right hidden"/>
        </>
      );
    } else if (this.state.entry === 'pass') {
      return (
        <>
          <img src="./wrong.png" className="wrong hidden" />
          <img src="./right.png" className="right"/>
        </>
      );
    } else if (this.state.entry === 'start') {
      return (
        <>
          <img src="./wrong.png" className="wrong hidden" />
          <img src="./right.png" className="right hidden"/>
        </>
      );

    }
  }

  render() {
    return <this.NoMoreRepeatedCode />;
  }
}

export default ValidateInput;
