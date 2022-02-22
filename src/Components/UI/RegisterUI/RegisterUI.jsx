import './RegisterUI.css'
import React from "react"
import { useState } from "react"
import axios from "axios"

export const RegisterUI = () =>{
    const Register = 'https://backend-edw.herokuapp.com/usuario'

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const createUser = (e) => {
        e.preventDefault()
        axios.post(Register, {      
            "username":username,
            "password":password,
            "name":name
        }).then(response => response)
        .then(data => console.log(data))
    }
    const dataUsername = (e) => {setUsername(e.target.value)}
    const dataPassword = (e) => {setPassword(e.target.value)}
    const dataName = (e) => {setName(e.target.value)}

    return(
        <div>
            <form>
                <div className='divRegister'>
                    <h2>Register</h2>
                </div>
                <b><p>Username</p></b>
                <input type="text" name="username" onChange={dataUsername}></input>

                <b><p>Password</p></b>
                <input type="text" name="password" onChange={dataPassword}></input>

                <b><p>Name</p></b>
                <input type="text" name="name" onChange={dataName}></input><br/>

                <button onClick = {createUser}>Registrar</button>

            </form>
        </div>
    )
}