import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Navigate} from "react-router-dom";
import Login from './slgc/login/login';
import { About } from './slgc/components/About';
import Branch from './slgc/branch/branch';
function App() {
  return (
    <div className="App">
      {/* <Greet name="AlnelFrancis"/>
      <Welcome/> 
      <Login />*/}
      <Routes>
        <Route path='/portfolio' element={<Login />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='Branch' element={<Branch />}></Route>
    </Routes>
    </div>
  );
}

export default App;
