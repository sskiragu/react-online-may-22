import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h1>Login here.</h1>
        <form>

                <div>
                    <input type='text'  placeholder='Enter username'/>
                </div>

                <div>
                    <input type='password'  placeholder='Enter password'/>
                </div>

                <div>
                    <button type='button'>Login</button>
                </div>
            </form>
            <p><Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Login