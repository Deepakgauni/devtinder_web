import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constant'
import { removeUserFeed } from '../utils/feedSlice'
import { useDispatch } from 'react-redux'

const UserCard = ({ user }) => {
    const { _id, firstName, lastName, photoUrl, age } = user
    const dispatch = useDispatch()

     const handleSendRequest = async (status, userId)=>{
      try{
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {withCredentials: true})

        dispatch(removeUserFeed(userId))
      } catch(err){
       console.error("Error sending request:", err)
     }

     }
    

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-center my-10">
      <button className="btn btn-primary" onClick={()=>{handleSendRequest("ignore", _id)}}>Ignore</button>
       <button className="btn btn-secondary" onClick={()=>{handleSendRequest("interested", _id)}}>Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
