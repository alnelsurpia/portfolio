import React from 'react';
import './branch.css';
import { useNavigate } from "react-router-dom";

function Branch() {
    let history = useNavigate();
    
    return (
        <div class="canvas">
            <div class="header">
                Samar Leyte Gass Center Branches
            </div>
        </div>
    )
}

export default Branch
