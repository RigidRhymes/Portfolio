'use client'


import React, {useEffect, useRef, useState} from 'react'
import {EXPERIENCE_ITEMS} from "@/lib/constants";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {motion, useScroll, useTransform} from "framer-motion";

gsap.registerPlugin(ScrollTrigger)

const Experiences = () => {

    const [colors, setColors] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    })


    const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])


    const randomColor = () => {
        const colors = [
            '#ff6f61', '#00c9a7', '#9b5de5', '#f15bb5',
            '#f9c74f', '#f94144', '#00bbf9', '#0077b6',
            '#06d6a0', '#118ab2'
        ]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    useEffect(() => {
        const palette = EXPERIENCE_ITEMS.map(() => randomColor())
        setColors(palette)
    }, []);

    return (
        <div className='flex-1 mt-16 mb-12 w-full '
             ref={containerRef}
             id='experiences'
        >
            <div className='px-6 w-full'>
                <p className='primary text-xs tracking-widest'>PROFESSIONAL JOURNEY</p>
                <div className='relative flex flex-col items-start px-1 mt-6 '>
                    <motion.div
                        className='gradient-line w-3 absolute top-0 left-4 h-full rounded'
                        style={{scaleY: lineScale, originY: 0}}
                    />

                    <div className='flex flex-col gap-6 ml-2 -mt-2 w-full'>
                        {EXPERIENCE_ITEMS.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-start gap-6 w-full'>
                                    <motion.div
                                       initial={{opacity: 0, y: 50}}
                                       whileInView={{opacity: 1, y: 0}}
                                       transition={{duration: 0.6, ease: 'easeOut'}}
                                       viewport={{once: false, amount: 0.3}}
                                        className='timeline-ring flex items-center justify-center z-50 timelin-ringer' style={{backgroundColor: colors[index], border: colors[index] ? `2px solid ${colors[index]}` : undefined}} data-color={colors[index]}>
                                        <FontAwesomeIcon icon={item.icon} className={`text-sm`}/>
                                    </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 100}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{ duration: 0.6, ease: 'easeOut'}}
                                    viewport={{once: false, amount: 0.3}}
                                    className='timeline-card flex justify-between items-start text-white text-xs flex-1 w-full p-4 rounded-lg'>
                                    <div className='flex flex-col gap-4 ' style={{width:'80%'}}>
                                        <p className='text-white text-[12px] px-4 sm:text-[18px]' style={{color:colors[index]}}>{item.title}</p>
                                        <p className='text-white text-[10px] px-4 sm:text-[18px]'>{item.sub}</p>
                                        <ul className='experience-text'>
                                            {item.description.split(',').map((point, i) => (
                                                <li key={i}>
                                                    <p>{point.trim()}</p>
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
// @ts-ignore
export default Experiences
