import React, { useState } from 'react'

function CondationalRendUsingLogicalAnd() {

    const [notBlank, setNotBlank] = useState(false)

  return (
    <div>
        {notBlank && <h1>Some stuff in the component</h1>}
    </div>
  )
}

export default CondationalRendUsingLogicalAnd