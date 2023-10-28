import React from 'react'
import one from './../../one.png'
import three from './../../three.png'
import four from './../../four.png'
import five from './../../five.png'
import six from './../../six.png'
import seven from './../../seven.png'
import eight from './../../eight.png'
import nine from './../../nine.png'
import ten from './../../ten.png'

import { motion ,useScroll } from 'framer-motion'

export default function Hakusensya() {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div className='p-0 m-0'
        
        >
            {/* 上４つ */}
            <motion.img className='absolute' src={one} alt=""
                animate={{ translateX: -1000}}
                transition={{ delay: 1, duration: 3 }}
            />
            <motion.img
                className='absolute top-0 left-64'
                src={six}
                alt=""
                animate={{ translateX: 0, translateY: -1000}}
                transition={{ delay: 1, duration: 3 }}
            />
            <motion.img
                className='absolute top-0 right-48'
                src={ten}
                alt=""
                animate={{ translateX: 0, translateY: -1000}}
                transition={{ delay: 1, duration: 3 }}
            />
            <motion.img className='absolute top-0 right-0' src={seven} alt=""
                animate={{ translateX: 1000, translateY: -1000 }}
                transition={{ delay: 1, duration: 3 }} />
            <motion.img
                className='absolute top-48 z-20'
                src={three}
                alt=""
                animate={{ translateX: -1000, translateY: 0 }}
                transition={{ delay: 1, duration: 3 }} />
            <motion.img className='absolute bottom-0 left-0 z-10' src={five} alt=""
                animate={{ translateX: -1000, translateY: 1000 }}
                transition={{ delay: 1, duration: 3 }} /> 
            <motion.img className='absolute bottom-0 right-0 z-20' src={four} alt="" animate={{translateX: 0,translateY: 1000 }}
                transition={{ delay: 1,duration: 3}} />


            <motion.img className='absolute bottom-0 left-44' src={eight} alt="" animate={{ translateX: 0,translateY: 1000 }}
                transition={{ delay: 1,duration: 3}} />

            <motion.img className='absolute right-0 top-12' src={nine} alt="" animate={{ translateX: 1000,translateY: 0 }}
                transition={{ delay: 1,duration: 3}} />
                <div className='overflow-auto w-20 h-12'>
<p>更新内容１</p>
<p>更新内容２</p>
<p>更新内容３</p>
<p>更新内容４</p>
<p>更新内容５</p>
<p>更新内容６</p>
<p>更新内容７</p>
<p>更新内容８</p>
<p>更新内容９</p>
<p>更新内容１０</p>
</div>
        </motion.div>
    )
}
