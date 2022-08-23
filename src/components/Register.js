import { Link } from "react-router-dom";

function Register(){
    return(
        <div>
            <h1>Register here.</h1>
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
        </div>
    )
}

export default Register;