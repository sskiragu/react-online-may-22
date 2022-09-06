import React, { useEffect, useState } from 'react'

 const UseEffectHook = () => {

    const [count, setCount] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        console.log("Inside the use Effect");
    },[data, count])

  return (
    <div>
        <h1>Use Effect Hook Example</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default UseEffectHook