import React, { useState } from 'react'
import Dashboard from './Dashboard'
import LoginComponent from './LoginComponent'

function CondationalRendUsingTerOper() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
        {isLoggedIn ? <Dashboard /> : <LoginComponent />}
    </div>
  )
}

export default CondationalRendUsingTerOper