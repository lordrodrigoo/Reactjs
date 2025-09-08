import React from "react";

function GenerateElements() {
    const cars = ['Ford', 'Chevrolet', 'Toyota', 'Honda'];
    const listcars = cars.map((car) => <li>{car}</li>);

    return (
        <table className="cars-table">
      <thead>
        <tr>
          <th>Tabela de Carros</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index}>
            <td>{car}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenerateElements;