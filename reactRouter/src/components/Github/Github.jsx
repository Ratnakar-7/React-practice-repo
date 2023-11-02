import { useLoaderData } from "react-router-dom"

// import React from 'react'

function Github() {
    const data = useLoaderData();
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>)
}

export default Github

export const getGithub = async () => {
    const response = await fetch('https://api.github.com/users/ratnakar-7')
    return response.json()
}