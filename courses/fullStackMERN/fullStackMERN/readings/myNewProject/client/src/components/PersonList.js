import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {

    const [people, setPeople] = useState([]);
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => setPeople(res.data));
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
    }

    return (
        <div>
            {
                people.map((person, index) => {
                    return (
                        <div key={index}> {/* Like our JSX return, map requires ONE parent element, so let's refactor. */}
                            <Link to={"/people/" + person._id}>
                                {person.lastName}, {person.firstName}
                            </Link>
                            |
                            <Link to={"/people/edit/" + person._id}>
                                Edit
                            </Link>
                            |
                            <DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default PersonList;