import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App() {

    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                console.log('RESPONSE');
                setPokemon(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="App">
            <h1>Pokemon API</h1>
            {
                pokemon.map((pokemon, idx) => (
                    <ul>
                        <li key={idx}>{pokemon.name}</li>
                    </ul>
                ))
            }
        </div>
    );
}

export default App;
