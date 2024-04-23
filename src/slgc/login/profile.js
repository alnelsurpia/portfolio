import React from "react";
import { Navigate } from "react-router-dom";

function Profile({ authorized }) { 
    if (!authorized) {
        return <Navigate to='/login' />;
    }
    return <div> If you are here, you are not allowed to be here </div>;
}

export default Profile;