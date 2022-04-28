import React from 'react';
import ReactDOM from 'react-dom';
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '30px',
    fontWeight: '800',
    
};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);


export default Square;