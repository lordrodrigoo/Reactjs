import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  increment = () => {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
        <>
            <h2>O valor do número é {this.state.number}</h2>
            <button onClick={this.increment}>Incrementar</button>
        </>
    );
  }
}
export default Counter;