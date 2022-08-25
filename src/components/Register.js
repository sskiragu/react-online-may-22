import { useState } from "react";
import { Link } from "react-router-dom";

function Register(){

    const [firstname, setFirstname] = useState("John")
    const [lastname, setLastname] = useState("Doe")
    return(
        <div>
            <h1>Register here - using Functional component.</h1>
            <form>

                <div>
                    <input type='text'  placeholder='Enter username'/>
                </div>

                <div>
                    <input type='email'  placeholder='Enter email'/>
                </div>

                <div>
                    <input type='password'  placeholder='Enter password'/>
                </div>

                <div>
                    <button type='button'>Register</button>
                </div>
            </form>
            <p><Link to='/'>Login</Link></p>

            <p>{firstname}</p>
            <p>{lastname}</p>
        </div>
    )
}

export default Register;