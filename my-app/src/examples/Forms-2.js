import React from "react";

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVehicle: '',
            notes: ''
        };
    }

    // Setters
    setCar = (event) => {
        this.setState({ selectedVehicle: event.target.value });
    };

    setNotes = (event) => {
        this.setState({ notes: event.target.value });
    };

    render() {
        return (
            <div className="vehicle-form2">
                <h3>Escolha seu Modelo! </h3>
                <form action="">
                    <select style={{ padding: '15px', marginBottom: '15px' }}
                    value={this.state.selectedVehicle}
                    onChange={this.setCar}>
                    <option value="Honda HRV 2018">Honda HRV 2018</option>
                    <option value="Toyota Corolla 2020">Toyota Corolla 2020</option>
                    <option value="Ford Mustang 2021">Ford Mustang 2021</option>
                    <option value="Chevrolet Camaro 2021">Chevrolet Camaro 2021</option>
                
                    </select>

                    <textarea 
                        maxLength={150}
                        value={this.state.notes}
                        onChange={this.setNotes}
                        placeholder="Deixe suas observações..."
                    ></textarea>

                    <p>Veículo selecionado: {this.state.selectedVehicle}</p>
                    <div className="notes">
                        <p style={{color: "blue" }}>Observações: </p>
                        <p>{this.state.notes}</p>
                    </div>
                </form>    
            </div>
        );    
    }

}

export default Vehicle;