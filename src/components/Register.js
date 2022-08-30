import { useState } from "react";
import { Link } from "react-router-dom";

function Register(){

    const [username, setUsername] = useState('sam')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username);
    }

    return(
        <div>
            <h1>Register here - using Functional component.</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <input type='text' value={username} onChange={handleUsernameChange} placeholder='Enter username'/>
                </div>

                <div>
                    <input type='email' value={email} placeholder='Enter email'/>
                </div>

                <div>
                    <input type='password' value={password} placeholder='Enter password'/>
                </div>

                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <p><Link to='/'>Login</Link></p>
        </div>
    )
}

export default Register;