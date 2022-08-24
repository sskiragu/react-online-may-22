import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div className='top-nav'>
        <Link to=''>Home</Link>
        <Link to=''>About</Link>
        <Link to=''>Services</Link>
        <Link to=''>Contact us</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </div>
  )
}

export default NavBar