import React from 'react'
import { motion } from 'framer-motion'


export default function First() {
    const words = "Hello World!"
    const word = words.split("")

    const textanimate = word.map((word, index) => {
        return (
            <motion.div
                initial={{ opacity: 0,fontSize:45,scale:0,y:100}}
                animate={{ opacity: 1,fontSize:15,scale:1,y:-10}}
                transition={{ duration: 0.5, delay: index * 0.05+5 }} key={index}>{word}
            </motion.div>
        )
    })

  return (
    <div className='flex justify-center mt-12'>
        {textanimate}
    </div>
  )
}
