import React from 'react';

const Functions = () => {
    const f = () => {
        alert("f function")
    }
    return (
        <div>
            <a onClick={f} >Click me</a>
        </div>
    );
};
export default Functions;