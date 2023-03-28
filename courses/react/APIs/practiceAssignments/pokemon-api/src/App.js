import {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [])

    return (
        <div className="App">
            <h1>807 Pokemon</h1>
            {
                pokemon.map((pokemon, idx) => (
                    <div key={idx}>
                        <h2>Name: {pokemon.name}</h2>
                    </div>
                ))
            }
        </div>
    );
}

export default App;
