import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header-section">
        <h1 className="header-title">{this.props.title}</h1>
        <hr/>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default Header
