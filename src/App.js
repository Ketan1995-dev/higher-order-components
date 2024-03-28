import logo from './logo.svg';
import './App.css';
import CounterComponent from './CounterComponent';

function App() {
  return (
    <div className="App">
        <CounterComponent name='Chetan' counterValue={5} />
    </div>
  );
}

export default App;
