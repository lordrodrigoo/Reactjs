import React from 'react';

function LinkClick() {
    function handleClick(e) {
        e.preventDefault();
        console.log('O Link foi clicado.');
    }

    return (
        <a className='link'
            href="https://www.google.com"
            onClick={handleClick}>
            Clique aqui
        </a>
    );
}

export default LinkClick