import React from "react";
import './BringUsersUI.css'

export const BringUsersUI = (e) => {
    const URL = "https://backend-edw.herokuapp.com/usuarios"

    const AllUsers = async (e) => {
        e.preventDefault()
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data);    
    }
    
    return(
        <div>
            <button onClick={AllUsers}>Bring Users</button>
        </div>
    )
}