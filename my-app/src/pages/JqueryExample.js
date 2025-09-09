import React, {useState, useEffect} from "react";
import $ from 'jquery';

export default function UsingJquery() {

    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        $.getJSON('https://jsonplaceholder.typicode.com/comments', data => {
            setData(data);  
        });
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
        <div className="using-jquery">
            
            <ul>
                <h2>Utilizando jQuery</h2>
                <li className="user-info" key={user.id}>
                    <p><strong style={{ color: "black" }}>Nome:</strong> {user.name}</p>
                    <p><strong style={{ color: "black" }}>Email:</strong> {user.email}</p>
                    <p><strong style={{ color: "black" }}>Comentário:</strong> {user.body}</p>
                </li>
                        
            </ul>

            <div className="user-navigation">
                <button onClick={prevUser}>Comentário Anterior</button>
                <button onClick={nextUser}>Próximo Comentário</button>    
            </div>    

        </div>
    );

}
