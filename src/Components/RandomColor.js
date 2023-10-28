import React, { useState } from 'react'

export default function RandomColor() {

    const [red, setRed] = useState( Math.floor(Math.random() * 256))
    const [green, setGreen] = useState( Math.floor(Math.random() * 256))
    const [blue, setBlue] = useState( Math.floor(Math.random() * 256))
    const [textRed, setTextRed] = useState( Math.floor(Math.random() * 256))
    const [textGreen, setTextGreen] = useState( Math.floor(Math.random() * 256))
    const [textBlue, setTextBlue] = useState( Math.floor(Math.random() * 256))
    const color = `rgb(${red}, ${green}, ${blue})`;
    const textcolor = `rgb(${textRed}, ${textGreen}, ${textBlue})`;
    function handleClick(){
        setRed(Math.floor(Math.random() * 256))
        setGreen(Math.floor(Math.random() * 256))
        setBlue(Math.floor(Math.random() * 256))
        setTextRed(Math.floor(Math.random() * 256))
        setTextGreen(Math.floor(Math.random() * 256))
        setTextBlue(Math.floor(Math.random() * 256))
    }
  return (
    <div className='h-screen w-full' onClick={handleClick} style={{backgroundColor: color}}>
        <p className='text-center text-bold ' style={{color: textcolor}}>ありがとんとん</p>
    </div>
  )
}
