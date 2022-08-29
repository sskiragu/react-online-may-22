import React, { useState } from 'react'

function Counter(props) {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
  return (
    <div>
        <h1>Counter App using Functional Componet - useState hook</h1>
        <p>{count}</p>
        <button onClick={increaseCount}>Increase Counter</button>
        <p>{props.username}</p>
    </div>
  )
}

export default Counter