import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://github.com/users/jamilmrt')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  }, [])
  
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers: {data.followers}</div>
      <img className='text-center'src={data.avatar_url} alt="Git picture"  width={300}/>
    </>
  )
}

export default Github
