import React, {useState} from 'react';
import axios from 'axios';

const PersonForm = (props) => {
    const {people, setPeople} = props; //this is new
    //keep track of what is being typed via useState hook
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({firstName, lastName});
        //makes a post request to create a new person
    }  // **** Our return/form will remain unchanged!

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default PersonForm;