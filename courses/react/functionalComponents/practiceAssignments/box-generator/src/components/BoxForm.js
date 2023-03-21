import React, {useState} from  'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState(25);
    const [width, setWidth] = useState(25);

    const createBox = (e) => {
        e.preventDefault();

        const newBox = {
            color: color,
            height: height,
            width: width
        };
        console.log("New box created", color, height, width);
    };

    return(
        <form onSubmit={createBox}>
            <div>
                <label>Color: </label> 
                <input type="color" onChange={ (e) => setColor(e.target.value) } />
            </div>
            <input type="submit" value="Create Box" />
        </form>
    );
};

export default BoxForm;