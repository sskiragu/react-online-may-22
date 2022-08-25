import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends Component {

    constructor(){
        super()

        this.state = {
            firstname: "John",
            lastname: "Doe"
        }

    }

  render() {
    return (
        <div>
        <h1>Register here - using class component.</h1>
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

        <p> 1 + 1 </p>

        <p>{1 + 1}</p>
        <p>{this.state.firstname}</p>
        <p>{this.state.lastname}</p>
    </div>

    )
  }
}
