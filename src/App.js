import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Navigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from './slgc/login/login';
import { About } from './slgc/components/About';
import Branch from './slgc/branch/branch';
function App() {
  const [branch, setBranch] = useState([
    {
        name: 'Nula-tula',
        id: '0001',
    },
    {
        name: 'Abucay',
        id: '0002',
    },
    {
        name: 'Guian',
        id: '0003',
    },
]);
const showBranch = true;
  return (
    <div className="App">
      {/* <Greet name="AlnelFrancis"/>
      <Welcome/> 
      <Login />*/}
            
      <Routes>
        <Route path='/portfolio' element={<Login />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='/portfolio/Branch' element=
                  {
                    showBranch ?(
                          <> 
                              {branch.map((branch) => {
                                return (
                                  <Branch name={branch.name} />
                                )
                              })}
                          </>
                    ):(
                      <p> No Branch is assigned to you yet. </p>
                    )
                      }>
        </Route>
    </Routes>
    </div>
  );
}

export default App;
