import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PersonForm from '../components/PersonForm';
import DeleteButton from '../components/DeleteButton';

const Update = (props) => {

    const {id} = useParams(); //this process is identical to the one we used with our Details.js component

    const [person, setPerson] = useState({});

    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => {
                console.log(res);
                navigate('/people'); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && (
                <>
                    <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName} initialLastName={person.lastName} />
                    <DeleteButton personId={person._id} successCallback={() => navigate("/people")} />
                </>
            )}
        </div>
    )
}
export default Update;