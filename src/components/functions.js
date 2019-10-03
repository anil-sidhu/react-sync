import React from 'react';

const functions = () => {
    function red()
    {
        alert("test")
    } 
    return (
        <div>
        <button onClick={()=>red()}> click</button>
        </div>
    );
}; 

export default functions;