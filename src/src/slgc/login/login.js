import React from 'react'
import './login.css';
import { BrowserRouter as Router, Route,Routes, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Branch from "../branch/branch";
import Profile from './profile';
function Login() {
    const navigate = useNavigate()
    return (
        <div class="canvas">
             
            <div class="header">
                Samar Leyte Gass Center
            </div>
            <div class="body">
                <div class="textArea">
                    <div class="label">
                        <label for="txtusername" id="lblusername"> Username:</label>
                    </div>
                    <div class="textbox">
                        <input type="text" id="txtusername"/>
                    </div>
               </div> {/*username this is a comment*/}

               <div class="textArea">
                    <div class="label">
                        <label for="txtusername" id="lblusername"> Password:</label>
                    </div>
                    <div class="textbox">
                        <input type="password" id="txtusername"/>
                    </div>
               </div> {/*password this is a comment*/}

                <div class="bottom">
                    <button type="button" id="login">Login</button> 
                    <button type="button" id="login" onClick={() => navigate('branch')}>Add New Branch</button>
                </div>

            </div>
        </div>
       
    )
}

export default Login
