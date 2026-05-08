import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BASE_URL} from '../utils/constant'


const Login = () => {
    const [emailId, setEmailId] = useState("jagdishchandra@gmail.com")
    const [password, setPassword]= useState("Jagdish@123")
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async ()=> {
      
      try{
        const res = await axios.post(BASE_URL + "/login",{
          emailId,
          password
        },
        {withCredentials:true}
      ) 
        dispatch(addUser(res.data))
        return navigate("/")

      }catch(err){
        console.log(err)
      }
    }

  return (
   <div className='flex justify-center py-4'>
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
   <fieldset className="fieldset py-3">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" className="input" placeholder="" value={emailId} 
    onChange={(e)=>setEmailId(e.target.value)}
  />
  
</fieldset>
 <fieldset className="fieldset py-3">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input" placeholder=""value={password}
    onChange={(e)=>setPassword(e.target.value)}
  />
  
</fieldset>
    </div>

    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
   </div>)
  
}

export default Login
