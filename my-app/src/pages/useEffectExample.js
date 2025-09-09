import React, {useEffect, useState} from "react";

function ExampleUseEffect(props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${counter} vezes`;
        return () => document.title = 'Componete desmontado';   
    });

    return (
        <div className="use-effect">
            <h2>Exemplo de useEffect</h2>
            <p>Você clicou {counter} vezes</p>
            <button onClick={() => setCounter(counter + 1)}>Clique aqui</button>
        </div>
    );
}

export default ExampleUseEffect;