import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends Component {

    constructor(){
        super()

        this.state = {
            username: 'sam',
            email: 'sam@gmail.com',
            password: '123'
        }

    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleEmailChange = (event) => {
        
    }

    handlePasswordChange = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("You clicked submit button");
        console.log(this.state.username);
    }

  render() {
    return (
        <div>
        <h1>Register here - using class component.</h1>
        <form onSubmit={this.handleSubmit}>

            <div>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} placeholder='Enter username'/>
            </div>

            <div>
                <input type='email' value={this.state.email} onChange={this.handleEmailChange} placeholder='Enter email'/>
            </div>

            <div>
                <input type='password' value={this.state.password} onChange={this.handlePasswordChange} placeholder='Enter password'/>
            </div>

            <div>
                <button type='submit'>Register</button>
            </div>
        </form>
        <p><Link to='/'>Login</Link></p>

        <h1>{this.state.username}</h1>
    </div>

    )
  }
}
