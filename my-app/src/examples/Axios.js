import React, { useState, useEffect} from "react";
import axios from "axios";

export default function UsingAxios() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); //Page 1 
    const itemsPerPage = 10; //5 items per page

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setData(response.data);
        });

    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (indexOfLastItem < data.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="using-axios">
            <h2>Utilizando Axios</h2>
            <ul>
                {currentItems.map(item => (
                    <li key={item.id}>
                        <p><strong style={{ color: "black" }}>ID:</strong> {item.id}</p>
                        <p><strong style={{ color: "black" }}>Título:</strong> {item.title}</p>
                        <p><strong style={{ color: "black" }}>Conteúdo:</strong> {item.body}</p>
                    </li>
                ))}
            </ul>

            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Página Anterior</button>
                <button onClick={nextPage} disabled={indexOfLastItem >= data.length}>Próxima Página</button>
            </div>
        </div>
    );

}