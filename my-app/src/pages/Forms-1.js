import React from "react";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    // Setters 
    setName = (event) => { 
        this.setState({ name: event.target.value }); 
    };    

    setAge = (event) => {
        this.setState({ age: event.target.value });
    };

    render() {
        return (
            <div className="user-form1">
                <h3>Formulário de usuário </h3>
                <form action="">
                    <h3>
                        <input type="text" placeholder="Nome"
                            onChange={this.setName} 
                        />
                        <input type="number" placeholder="Idade"
                            onChange={this.setAge} 
                        />
                        <p>Nome: {this.state.name}</p>
                        <p>Idade: {this.state.age}</p>

                    </h3>
                </form>
            </div>
        );    
    }

}

export default UserForm;
