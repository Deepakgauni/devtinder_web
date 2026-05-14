import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { addConnections} from '../utils/connectionSlice'
import { useDispatch, useSelector } from 'react-redux'

const Connections = () => {

       const connections = useSelector((store)=> store.connections)
       const dispatch = useDispatch()

    const fetchConnections = async()=>{
      
        try{
            const res = await axios.get(BASE_URL + "/user/connection", {withCredentials: true})
            console.log(res.data)
            dispatch(addConnections(res.data.data))

        } catch (error) {
            console.error("Error fetching connections:", error)
        }
    }

    useEffect(()=>{
        fetchConnections()
    }, [])

    if(!connections ) return 

    if(connections.length === 0 ) return <h2>No connections found</h2>

  return (
    <div className='text-center my-10 '>
      <h2 className='text-bold text-2xl'>Connections</h2>

      {connections.map((connection)=>{
        const { firstName, LastName} = connection;
        return (
            <div className='m-4 p-4 rounded-lg bg-base-300'> 
               <h2> {firstName} + " " + {LastName} </h2>
            </div>
        )
      })}
    </div>
  )
}

export default Connections
