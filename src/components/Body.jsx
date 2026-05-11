import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { addUser } from '../utils/userSlice'

const Body = () => {
const navigate = useNavigate()
const dispatch = useDispatch()

const userData = useSelector((store)=>store.user)

  const fetchUser = async ()=>{

    if(userData) return;
    try{
       const res = await axios.get(BASE_URL + "/profile/view", { withCredentials:true })
       dispatch(addUser(res.data))
    }
    catch(err){
      if(err.status===401){
        navigate("/Login")
      }
      console.log(err)
    }
  }
   useEffect(()=> {
    
     fetchUser()
    
   }, [])

  return (
    <div>
      
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Body
