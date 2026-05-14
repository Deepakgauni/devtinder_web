import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'

const Requests = () => {

    const requests = useSelector((store)=> store.requests)
   const dispatch = useDispatch()

    const fetchRequests = async()=>{
        try{
                 const res = await axios.get(BASE_URL + "/user/request/received", {withCredentials: true}) 


                 console.log(res.data.data)

                dispatch(addRequests(res.data.data))

        }
           

        catch(err){
              console.error(err.response?.data || err.message)
        }
    }

    useEffect(()=>{
        fetchRequests()
    }, [])


if(!requests ) return 

    if(requests.length === 0 ) return <h2>No requests found</h2>

  return (
    <div className='text-center my-10 '>
      <h2 className='text-bold text-2xl'>Requests</h2>

      {requests.map((requests)=>{
        const { _id, firstName, lastName} = requests.fromUserId
;
        return (
            <div key={_id} className= 'justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto'> 
              <div className='text-left mx-4'> <h2> {firstName + " " + lastName} </h2></div>
               <div>
                <button className="btn btn-primary mx-2 ">Reject</button>
               <button className="btn btn-secondary mx-2">Accept</button>
               </div>
            </div>
        )
      })}
    </div>
  )
}

export default Requests
