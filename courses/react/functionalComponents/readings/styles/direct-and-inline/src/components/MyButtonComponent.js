import React, { Component } from 'react';

// DIRECT EXAMPLE
// const MyButton = (props) => {
//     return (
//         <button className="btn">{ props.children }</button>
//     );
// }
    
// export default MyButton;

// INLINE EXAMPLE

const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff',
    border: 'none'
};

const MyButton = (props) => {
    return (
        <button style={btnStyle}>{ props.children }</button>
    );
}
    
export default MyButton;