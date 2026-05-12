import React from 'react'
import { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const EditProfile = ({ user }) => {
     const [firstName, setFirstName] = useState(user.firstName)
     const [lastName, setLastName]= useState(user.lastName)
    const [age, setAge] = useState(user.age) 
    const dispatch = useDispatch()
    const [showtoast, setShowToast] = useState(false)


    const saveProfile = async ()=>{
        try{
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                age
            }, {withCredentials: true}
        )
        dispatch(addUser(res?.data?.data))
        setShowToast(true)
        setTimeout(()=>{
            setShowToast(false)
        }, 3000)
        }
        
        catch(err){
              setError(err.message)
        }
    }

  return (
    <>
    <div className='flex justify-center my-10'>
    <div className='flex justify-center py-4 mx-8'>
    <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile </h2>
    <div>
   <fieldset className="fieldset py-3">
  <legend className="fieldset-legend">First Name</legend>
  <input type="text" className="input" placeholder="" value={firstName} 
    onChange={(e)=>setFirstName(e.target.value)}
  />
  
</fieldset>
 <fieldset className="fieldset py-3">
  <legend className="fieldset-legend">Last Name</legend>
  <input type="text" className="input" placeholder=""value={lastName}
    onChange={(e)=>setLastName(e.target.value)}
  />
  
</fieldset>

<fieldset className="fieldset py-3">
  <legend className="fieldset-legend">Age</legend>
  <input type="number" className="input" placeholder=""value={age}
    onChange={(e)=>setAge(e.target.value)}
  />
  
</fieldset>

<p className="text-red-500"></p>
    </div>

    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
    </div>
  </div>
</div>
   </div>

   <UserCard user= {{firstName, lastName, age}} />

</div>{showtoast &&(
<div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Profile updated successfully.</span>
  </div>
</div>
)}
</>
  )
}

export default EditProfile
