import React from 'react';

export
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className='welcome'>Welcome {this.props.name}!</h1>
        <h2 className="title">Manipulating Components</h2>
      </header>
    );
  }
}

