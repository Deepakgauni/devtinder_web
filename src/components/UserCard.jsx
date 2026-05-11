import React from 'react'

const UserCard = ({ user }) => {
    const { firstName, lastName, photoUrl, age } = user
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
      <button className="btn btn-primary">Ignore</button>
       <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
