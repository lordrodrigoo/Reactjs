import React, { useState, useEffect} from "react";

export default function UsingFetchAPI() {

    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch('/users.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);

    const nextUser = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevUser = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    if (data.length === 0) return <p>Carregando...</p>;

    const user = data[currentIndex];

    return (
        <div className="using-fetch-api">
            
            <ul>
                <h2>Utilizando Fecth API</h2>
                <li className="user-info" key={user.id}>
                    <p><strong style={{ color: "black" }}>Nome:</strong> {user.name}</p>
                    <p><strong style={{ color: "black" }}>Username:</strong> {user.username}</p>
                    <p><strong style={{ color: "black" }}>Email:</strong> {user.email}</p>
                    <p><strong style={{ color: "black" }}>Rua:</strong> {user.address.street}</p>
                    <p><strong style={{ color: "black" }}>Complemento:</strong> {user.address.suite}</p>
                    <p><strong style={{ color: "black" }}>Cidade:</strong> {user.address.city}</p>
                    <p><strong style={{ color: "black" }}>CEP:</strong> {user.address.zipcode}</p>
                    <p><strong style={{ color: "black" }}>Telefone:</strong> {user.phone}</p>
                    <p><strong style={{ color: "black" }}>Portfólio:</strong> {user.website}</p>
                    <p><strong style={{ color: "black" }}>Empresa:</strong> {user.company.name}</p>
                    <p><strong style={{ color: "black" }}>Frase de impacto:</strong> {user.company.catchPhrase}</p>
                    <p><strong style={{ color: "black" }}>Setor:</strong> {user.company.bs}</p>
                
                </li>
                        
            </ul>

            <div className="user-navigation">
                <button onClick={prevUser}>Usuário Anterior</button>
                <button onClick={nextUser}>Próximo Usuário</button>    
            
            </div>    

        </div>
    );

}