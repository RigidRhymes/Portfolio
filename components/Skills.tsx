'use client'

import { CARD_ITEMS } from '@/lib/constants'
import SkillsCard from './SkillsCard'
import { motion } from 'framer-motion'
import {useEffect, useMemo, useState} from "react";

const Skills = () => {
    const [randomOffsets, setRandomOffsets] = useState<{x: number; y: number; delay: number; rotate: number}[]>([])

    useEffect(() => {
        setRandomOffsets(
        CARD_ITEMS.map(() => ({
            x: Math.random() * 60 - 30,
            y: Math.random() * 40 - 20,
            delay: Math.random() * 0.6,
            rotate: Math.random() * 10 -5,
        }))
        )
    }, []);


  return (
    <div className='mt-12 w-full flex flex-col mb-16' id='skills'>
      <div className='px-6 mb-12'>
        <div>
          <p className='primary font-poppins-100 text-[10px] '>TECHNICAL EXPERTISE</p>
        </div>
        <div className='flex justify-between items-center w-full'>
          <h2 className='text-[28px] font-poppins-700 mt-2'>SkillEcosystem</h2>
          <div className='text-[10px] text-gray-300 w-100 font-light text-right'>A comprehensive toolkit refined through years of cross-disciplinary work in vibrant tech and creative landscape</div>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap text-xs items-center justify-center'>
      {CARD_ITEMS.map((item, index) => {
         const offset = randomOffsets[index]
          return (
              <motion.div
              key={index}
              initial={{opacity: 0, x: offset?.x ?? 0, y: offset?.y ?? 0, rotate: offset?.rotate ?? 0}}
              whileInView={{opacity: 1, x: 0, y: 0, rotate: 0}}
              transition={{duration: 0.7, delay: offset?.delay ?? 0}}
              viewport={{once: false, amount: 0.2}}
              className='flex gap-4 flex-wrap text-xs items-center justify-center'
              >
          <SkillsCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
          />
              </motion.div>
      )})}
    </div>
    </div>
  )
}

export default Skills
