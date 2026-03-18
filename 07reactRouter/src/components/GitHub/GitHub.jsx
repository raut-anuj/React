import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function GitHub(){
    const [ data, setData ] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response=> response.json())
        .then(data => {
            console.log(data);
        })     
    })
    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data.followers}</div>
    )
}

export default GitHub