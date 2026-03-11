import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import axios, { formToJSON } from 'axios'


const Update = () => {
  let [formData,setFOrmData]=useState([])

  let{id}=useParams()
  useEffect(()=>{
    async function apiFetch() {
      let data= await axios.get(`http://localhost:3030/Product/${id}`)
      setFOrmData(data.data)
      
    }apiFetch()
  },[])
  let navigate=useNavigate()

  function HandleSubmit(e){
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:3030/Product",formData)
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input type="text" value={formData.id} onChange={(e)=>{setFOrmData({...formData,id:e.target.value})}} />
        <br/>
        <input type="text" value={formData.price}  onChange={(e)=>{setFOrmData({...formData,price:e.target.value})}}/>
        <br />
        <input type="text" value={formData.category} onChange={(e)=>{setFOrmData({...formData,category:e.target.value})}} />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default Update
