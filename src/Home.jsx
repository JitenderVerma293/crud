import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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

     function del(id){
// console.log("hlo")
let result= confirm("want to delete the data")
if(result){
    axios.delete(`http://localhost:3030/Product/${id}`)
    window.location.reload()
}else{

}
     }
 
  return (
    <div>
        <button><Link to={"/create"}>Create</Link></button>
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
                                <button><Link to={`/view/${id}`}>View</Link></button>
                                <button><Link to={`/update/${id}`}>Update</Link></button>
                                <button onClick={()=>{del(id)}}>Delete</button>
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
