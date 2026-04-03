'use client'

import { motion } from 'framer-motion'
import React from 'react'

const Info = () => {
  return ( 
    <div className='mb-12 hidden md:block sm:block  w-full h-60 bg-gray-800 mt-16 px-6 flex items-start justify-center flex-col overflow-hidden'>
        <p className='mt-4 primary font-poppins-100 text-xs'>PROFILE SUMMARY</p>
      <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true,}}
          className='mt-4 font-poppins-400 text-wrap flex flex-wrap text-2xl w-[80%]'>
          Dynamic Professional with over <span className='primary'> 15 years</span>  of experience in full-stack development, design, and publishing. I bridge the gap between creative vision and technical execution, delivering solutions that are as robust as they are aesthetically compelling.
      </motion.div>
    </div>
  )
}

export default Info
