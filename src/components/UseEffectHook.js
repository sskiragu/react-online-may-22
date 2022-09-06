import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const listItems = data.map(function(item){
        return(
            <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                </tr>
            </tbody>
        )
    })

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            {listItems}
        </table>
    </div>
  )
}

export default UseEffectHook