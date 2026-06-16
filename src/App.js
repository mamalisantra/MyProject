import './App.css';
import { ExampleContext } from './Components/context/ExampleContext';
import Routes from './Components/Routes';
function App() {
  return (
    <div className="App">
      <ExampleContext>
        <Routes />
      </ExampleContext>
    </div>
  );
}
export default App;
