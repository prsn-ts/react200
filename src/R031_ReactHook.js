import React, { useState, useEffect } from 'react';

function R031_ReactHook(props) {
    let [contents, setContents] = useState('[THIS IS REACT]'); // ['[THIS IS REACT]', ƒ]

    useEffect(() => {
        console.log('useEffect');
    });

    function buttonClick() {
        // contents = '[THIS IS hooks]';
        setContents('[THIS IS HOOKS]');
    }

    return (
        <div style={{padding: "0px"}}>
            <h2>{contents}</h2>
            <button onClick={() => buttonClick()}> 버튼</button>
        </div>
    )
}

export default R031_ReactHook;