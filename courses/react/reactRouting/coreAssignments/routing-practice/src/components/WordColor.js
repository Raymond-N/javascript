import React, {useState} from "react";
import { useParams } from "react-router-dom";

const WordColor = (props) => {

    const {word, color1, color2} = useParams();

    return (
        <div>
            <h2 style={{backgroundColor: color2, color: color1}}>The word is: {word}</h2>
        </div>
    )
}
export default WordColor;