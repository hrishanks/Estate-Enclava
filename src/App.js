import './App.css';
import Companies from './components/Companies/Companies';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';

function App() {
  return (
    <div className="App">
      <div>
      <div className="whitegradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
