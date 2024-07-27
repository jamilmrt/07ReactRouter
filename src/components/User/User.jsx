import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const { userid } = useParams() // Destructuring the useruid from the route parameter

    // Replace the following mock data with your actual API call
    // const users = [
    //   { id: 1, name: 'Jamil', email: 'rtk.sorry@google.com' },
    //   { id: 2, name: 'Bob', email: 'bob@example.com' },
    // ]
  return (
    <>
      <h1 className='bg-cyan-700 text-blue-950 p-4'> User: {userid} </h1>
    </>
  )
}

export default User
