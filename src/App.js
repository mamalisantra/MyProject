import './App.css';
import { ExampleContext } from './Components/context/ExampleContext';
import Routes from './Components/Routes';
function App() {
  return (
    <div className="App">
      <ExampleContext>
        <Routes />
        {/* I am from local */}
    // I am  from Github
      </ExampleContext>
    </div>
  );
}
export default App;
