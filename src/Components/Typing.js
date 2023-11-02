import React, { useState } from 'react'

export default function Typing() {
    const words = "helloworld!";
    const [text,setText] = useState("");


    const handleClick =(length,value)=>{
        if(words[length-1]===value[length-1]){
            console.log("atteruyo")
        }else{
            console.log("matigai")
        }
    }
    
  return (
    <div>
        <form className='bg-sky-500'>
            <input type="text" onChange={(event) => 
            {
                setText(event.target.value)

                handleClick(event.target.value.length,event.target.value)
            }} value={text} />
        </form>
        <p>{text}</p>
    </div>
  )
}
