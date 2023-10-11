import React from 'react'
import { motion,useAnimation } from 'framer-motion'


export default function Second() {
    const words = "Hello World!"
    const word = words.split("")
    const controls = useAnimation()

    const textanimate = word.map((word, index) => {
        return (
            
            <motion.div
                initial={{ opacity: 0,scale:0,y:100}}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.05 }} key={index}>{word}
            </motion.div>
        )
    })

  return (
    <div className='flex justify-center mt-12'>
        <button onClick={() => controls.start({ opacity: 1,fontSize:15,scale:1,y:-10})}>Start</button>
        {textanimate}
    </div>
  )
}
