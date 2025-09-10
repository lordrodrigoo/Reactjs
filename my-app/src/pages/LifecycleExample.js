import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  }

  decrement = () => {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
        <div style={{textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{textAlign: 'center' }}>Stoque de produto x = {this.state.number}</h2>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
        </div>
    );
  }
}
export default Counter;