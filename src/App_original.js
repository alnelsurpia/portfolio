import logo from './logo.svg';
import './App.css';
import Greet from './excercise/Greet';
import Welcome from './excercise/Welcome';
import StateExample from './excercise/StateExample';
import Hooks from './excercise/hooks/Hooks';
import Hooks2 from './excercise/hooks/Hooks2';
import Hooks3 from './excercise/hooks/Hooks3';
import Hooks4 from './excercise/hooks/Hooks4';
import Hooks5 from './excercise/hooks/Hooks5';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Greet name="AlnelFrancis"/>
      <Welcome/>
      <StateExample/>
      <Hooks/>
      <Hooks2/>
      <Hooks3/>
      <Hooks4/>
      <Hooks5/>
      </header>
    </div>
  );
}

export default App;
