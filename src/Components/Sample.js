import React, { useState } from 'react'

export default function Sample() {
    const [data,setData] = useState([
        {id : 1, name: "nanami"},
        {id : 2, name: "mama"},
        {id : 3, name: "papa"},
        {id : 4, name: "tasuku"},
    ])

    const shuffleArray = (array) => {
        return array.slice().sort(() => Math.random() - Math.random())
      }

    function handleClick(){
        setData(shuffleArray(data))
    }

    return (
        <div className='font-serif'>
            {data.map((data)=>{
                return (
                    <div key={data.id}>
                    <p>{data.name}</p>
                    <p>{data.id}</p>
                    </div>
                )
            })}
            <button onClick={handleClick}>shahhuru</button>
        </div>
    )
}
