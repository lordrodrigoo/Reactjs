import React from "react";

// A bind is a link that allows you to change the behavior of the this
// of a given element. In an event, the this refers, in most cases, to the
// component that invoked that event.

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Rodrigo', age: 30 };
    this.changeUser = this.changeUser.bind(this);
  }

    changeUser() {
    this.setState({ 
        name: this.props.user.name, 
        age: this.props.user.age 
        });
    }

    render () {
        return (
            <>
                <h1>Nome Completo: {this.state.name}</h1>
                <h2>Idade: {this.state.age}</h2>
                <button onClick={this.changeUser}>Mudar</button>
            </>
        );
    }
}



export default User