import './App.css';
import Companies from './components/Companies/Companies';
import Fotter from './components/Fotter/Fotter';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';

function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh' }}>
      <div className="whitegradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <GetStarted/>
      <Fotter/>
    </div>
  );
}

export default App;