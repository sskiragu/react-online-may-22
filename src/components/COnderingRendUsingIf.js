import React, { useState } from 'react'
import Dashboard from './Dashboard'
import LoginComponent from './LoginComponent'

function COnderingRendUsingIf() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const myComponent = () => {
        if(isLoggedIn === true){
            return <Dashboard />
        }else{
            return <LoginComponent />
        }
    }
  return (
    <div>
        {myComponent()}
    </div>
  )
}

export default COnderingRendUsingIf