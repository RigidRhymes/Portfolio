'use client'


import {motion, useScroll, useTransform} from 'framer-motion'
import React, {useRef} from 'react'
import {EXPERIENCE_ITEMS} from "@/lib/constants";

type ExperienceProps = {
    year: string,
    title: string,
    description: string,
    sub: string
}

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "start start"]
    })

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])


    return (
        <div className='flex-1 mt-16 mb-12 w-full '
             ref={containerRef}
             id='experiences'
        >
            <div className='px-6 w-full'>
                <p className='primary text-xs tracking-widest'>PROFESSIONAL JOURNEY</p>
                <div className='relative flex flex-col items-start px-1 mt-6 '>
                    <motion.div
                    className='absolute left-4 top-0 w-1 bgColor rounded'
                    style={{height: lineHeight}}
                    />

                    <div className='flex flex-col gap-16 ml-2 -mt-2  w-full'>
                        {EXPERIENCE_ITEMS.map((item, index) => {

                            const bulletPoints = item.description.split(",").map(str => str.trim())
                            return (

                            <div key={index} className='flex items-start gap-6 w-full'>

                                <motion.div
                                    initial={{borderColor: "#9CA3AF"}}
                                    whileInView={{borderColor: "#00D1FF"}}
                                    transition={{duration: 0.6, delay: index * 0.3}}
                                    viewport={{once: false, amount: 0.3}}
                                    className='w-4 h-4 p-2 rounded-full mt-2 border-4 border-[#00D1FF]'
                                />
                                <motion.div
                                    initial={{opacity: 0, y: 20, color: "#9CA3AF"}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: index * 0.3}}
                                    viewport={{once: false, amount: 0.3}}
                                    className='flex justify-between items-start text-white text-xs flex-1 w-full '
                                >
                                    <div className='flex flex-col gap-4 ' style={{width:'80%'}}>
                                        <p className='text-white text-[15px]'>{item.title}</p>
                                        <p>{item.sub}</p>
                                        <ul className='list-disc space-y-1'>
                                            {bulletPoints.map((point, i) => (
                                                <li key={i}>
                                                    <p>{point}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='primary '>{item.year}</div>
                                </motion.div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experiences
