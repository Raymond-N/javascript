import './App.css';
import PersonCard from './components/PersonCard';

function App() {
    return (
        <div className="App">
            <PersonCard
            firstName={"Raymond"}
            lastName={"Natividad"}
            initialAge={30}
            hairColor={"Brown"} />

            <PersonCard
            firstName={"Anthony"}
            lastName={"Davis"}
            initialAge={29}
            hairColor={"Black"} />

            <PersonCard
            firstName={"Michael"}
            lastName={"Scott"}
            initialAge={45}
            hairColor={"Black"} />

            <PersonCard
            firstName={"Saul"}
            lastName={"Goodman"}
            initialAge={48}
            hairColor={"Brown"} />
        </div>
    );
}

export default App;
