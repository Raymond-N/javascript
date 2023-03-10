import './App.css';
import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="App">
            <PersonCard
            firstName={"Raymond"}
            lastName={"Natividad"}
            age={30}
            hairColor={"Brown"} />

            <PersonCard
            firstName={"Anthony"}
            lastName={"Davis"}
            age={29}
            hairColor={"Black"} />

            <PersonCard
            firstName={"Michael"}
            lastName={"Scott"}
            age={45}
            hairColor={"Black"} />

            <PersonCard
            firstName={"Saul"}
            lastName={"Goodman"}
            age={48}
            hairColor={"Brown"} />
        </div>
    );
}

export default App;
