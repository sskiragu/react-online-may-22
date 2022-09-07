import React, { useEffect, useState } from 'react'
import axios from 'axios'

const  FetchDataAxios = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data);
    }

    const listItems = data.map((item) => {
        return(
            <tbody key={item.id}>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.body}</td>
                </tr>
            </tbody>
        )
    })
    
  return (
    <div>
        <h1>Fetch Data using Axios</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Body</th>
                </tr>
            </thead>
            {listItems}
        </table>
    </div>
  )
}

export default FetchDataAxios