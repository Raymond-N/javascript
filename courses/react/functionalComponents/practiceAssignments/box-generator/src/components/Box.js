import React from 'react';

const Box = (props) => {

    const {boxArray} = props;

    return (
        <div>
            {
                boxArray.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        height: "50px",
                        width: "50px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
}

export default Box;