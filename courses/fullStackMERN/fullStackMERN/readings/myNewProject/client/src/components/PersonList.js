import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) => {

    const {removeFromDom, people, setPeople} = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
        .then((res) => {
            console.log(res.data);
            setPeople(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

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
                            <button onClick={(e) => {deletePerson(person._id)}}>
                                Delete
                            </button> 
                        </div>
                    )
                })
            }
        </div>
    );
}
export default PersonList;