import React, {useState} from  'react';

const BoxForm = (props) => {

    const {boxArray, setBoxArray} = props;

    const [color, setColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setBoxArray([...boxArray, color]);
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Color: </label>
                    {/* change input type to color to use Color Chart */}
                    <input type="text" onChange={(e) => setColor(e.target.value)} value={color}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
};

export default BoxForm;