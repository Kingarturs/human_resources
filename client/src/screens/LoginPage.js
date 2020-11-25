import React, { useState }  from 'react'
import './LoginPage.css'

const axios = require('axios');

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios({
            url: "http://localhost:5000/login", 
            method: 'POST',
            data: {
                email: email,
                password: password,
            }
        }).then((res) => {
            console.log(res.data.message);
        })
    }

    return (
        <div id="login" >
            <h2>Login</h2>
            <input type="text" id="email" onChange={(arg) => setEmail(arg.target.value)} placeholder="Email"/>
            <span id="email-border"></span>
            <input type="password" id="password" onChange={(arg) => setPassword(arg.target.value)} placeholder="Password" />
            <span id="password-border"></span>
            <button className="button" onClick={login} >login</button>
        </div>
    )
}

export default LoginPage;