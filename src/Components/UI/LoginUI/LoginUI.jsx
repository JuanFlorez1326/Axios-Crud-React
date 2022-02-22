import './LoginUI.css'
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export const LoginUI = () => {

    const URL = "https://backend-edw.herokuapp.com/login";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {

        e.preventDefault();
    
        axios.post(URL, {
          "username":username,
          "password":password
        })
        .then(response => console.log(response))      
    }
    const dataUsername = (e) => {
        setUsername(e.target.value)
    }
    const dataPassword = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div>
            <div className='divLogin'>
                <form>
                    <div className='divTitle'>
                         <h2>Login</h2>
                    </div>

                    <b><p>Username</p></b>
                    <input className='input1' onChange={dataUsername} type="text" name="username"></input>

                    <b><p>Password</p></b>
                    <input onChange={dataPassword} type="text" name="password"></input><br/>

                    <button onClick={login}>Login</button>
                </form>
            </div>
        </div>
    )
}