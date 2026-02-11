import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from 'axios'

const Create = () => {
  let[formData,setFormData]=useState({
    id:"",
    price:"",
    category:""
  })
  let navigate=useNavigate()

  function HandleSubmit(e){
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:3030/Product",formData)
    navigate("/")
  }

  return (
    <div>
      <h1>All Product</h1>
      <form onSubmit={HandleSubmit}>
        <input type="text" name='id' placeholder='Enter Id' onChange={(e)=>setFormData({...formData,id:e.target.value})} />
        <input type="text" name='price' placeholder='Enter Price' onChange={(e)=>setFormData({...formData,price:e.target.value})}/>
        <input type="text" name='category' placeholder='Enter Category' onChange={(e)=>setFormData({...formData,category:e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Create
