import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      menuOpen: !this.state.menuOpen
    }));
  }

  render() {
    if (!this.state.menuOpen) {
      return (
        <div className="container">
          <div className="burger-icon" onClick={this.handleClick}>
            <img src="./icons8-menu-48.png"/>
          </div>
          <div className="full-menu hidden">
            <ul className="menu-bar">
              <h2>MENU</h2>
              <li>About</li>
              <li>Get Started</li>
              <li>Sign In</li>
            </ul>
            <div className="dark-surround "></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="burger-icon hidden">
            <img src="./icons8-menu-48.png"/>
          </div>
          <div className="full-menu">
            <ul className="menu-bar">
              <h2 onClick={this.handleClick}>MENU</h2>
              <li onClick={this.handleClick}>About</li>
              <li onClick={this.handleClick}>Get Started</li>
              <li onClick={this.handleClick}>Sign In</li>
            </ul>
            <div className="dark-surround" onClick={this.handleClick}></div>
          </div>
        </div>
      );

    }
  }
}

export default AppDrawer;
