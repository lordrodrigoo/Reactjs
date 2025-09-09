import { useState } from "react";
import React from "react";

function UseHookAndState(props) {
    /* eslint-disable no-unused-vars */
    const [name, setName] = useState('Rodrigo');
    const [age, setAge] = useState(20);
    const [on, setOn] = useState(true);
    const [all, setAll] = useState({name: 'Rodrigo', age: 20, job: 'Programmer'}
    /* eslint-disable no-unused-vars */

    );

    return (
        <div className="hook-state">
            <h2>Hooks and useState</h2>
            <p>Meu nome é {name} e tenho {age} anos.</p>
            <p>{on ? 'Ligado' : 'Desligado'}</p>
            <p>Nome: {all.name}, Idade: {all.age}, Profissão: {all.job}</p>
        </div>
    );
}

export default UseHookAndState;