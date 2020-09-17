/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>EMAIL
          <input type='email' value={this.state.email} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Sign Up"></input>
      </form>
    );
  }
}

const parentElementForButton = document.getElementById('root');
const form = <Form />;

ReactDOM.render(
  form,
  parentElementForButton
);
