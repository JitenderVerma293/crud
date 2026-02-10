import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    let [data,setData]=useState([])


    useEffect(()=>{
        async function apiFetch() {
          let apiData=await axios.get("http://localhost:3030/Product")
          //console.log(apiData)
          setData(apiData.data)
        }
        apiFetch()
    },[])
    console.log(data)
 
  return (
    <div>
      <table  border="5px">
        <thead>
            <tr>
                <th>id</th>
                <th>price</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            data.map((value)=>{
                let {id,price,category}=value
                // console.log(id)
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{price}</td>
                        <td>{category}</td>
                        <td>
                            <div>
                                <button>Update</button>
                                <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                )
            })
           }
        </tbody>
        </table>
        
    </div>
  )
}

export default Home
