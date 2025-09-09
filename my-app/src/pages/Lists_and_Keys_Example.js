

function GenerateElements() {
    const cars = ['Ford', 'Chevrolet', 'Toyota', 'Honda'];

    return (
      <div className="table">
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
      </div>
  );
}

export default GenerateElements;