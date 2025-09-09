import React, {useState} from "react";

function ExampleHook(props) {
    const [name, setName] = useState('Rodrigo');
    const [age, setAge] = useState(20);

    const SumAge = () => {
        setAge(age + 1);
    };

    const ChangeName = () => {
        setName('Maria');
        setName('João');
    };

    return (
        <div className="hook">
            <h2>Hooks</h2>
            <p>Meu nome é {name} e tenho {age} anos.</p>
            <button onClick={SumAge}>Somar idade</button>
            <button onClick={ChangeName}>Mudar nome</button>
        </div>
    );
}

export default ExampleHook;