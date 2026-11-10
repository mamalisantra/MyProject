import './App.css';
import { ExampleContext } from './Components/context/ExampleContext';
import Routes from './Components/Routes';
function App() {
  return (
    <div className="App">
      <ExampleContext>
        <Routes />
        {/* I am from local ----- first msg */}
          {/* I am from local ---second msg*/}
    // I am  from Github ----- first msg 
  // I am from github----------- sec msg 

    {/* I am from local ---- third msg */}
      </ExampleContext>
    </div>
  );
}
export default App;
