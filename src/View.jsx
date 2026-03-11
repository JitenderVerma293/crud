import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
  const  {id}=useParams()
  let [data,setData]=useState({})

 useEffect(()=>{
 async function apiFetch(){
    let Api= await axios.get(`http://localhost:3030/Product/${id}`)
  // console.log(Api.data)
    setData(Api.data)
  }
  apiFetch()
  // console.log(data)
  //   console.log(id)
  //    console.log(price)
  //  console.log(category)
},[])
// console.log(data)
let{ price,category}=data


  return (
    <div>
     <h1>Price:{price}</h1>
     <h1>Category:{category}</h1>
    </div>
  )
}

export default View
