'use client'

import React, {useEffect, useState} from 'react'
import Icon from "feather-icons-react"
import Image from 'next/image'
import corporate from '@/assets/corporate.png'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from "react-intersection-observer";
import BackgroundEffect from "@/components/BackgroundEffect";


const Hero = () => {
    const controls = useAnimation()
    const [ref, inView ] = useInView({ triggerOnce: true, threshold: 0.2})
    const [count, setCount] = useState(0)

    useEffect(() => {

        if(inView){
            let start = 1
            const end = 15
            const duration = 2500
            const stepTime = Math.abs(Math.floor(duration / (end - start)))

            const timer = setInterval(() => {
                start += 1
                setCount(start)
                if(start === end) clearInterval(timer)
            }, stepTime)
        }
    }, [inView]);

  return (
    <div className='mb-16 px-6 overflow-hidden' id='hero'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center lg:flow-row sm:mt-24 mt-12 '>
            {/* Left section */}
        <section className='sm:w-[50%] '>
              <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: false, amount: 0.2}}
                  transition={{duration: 0.6, delay: 0.1}}
              >
            <div className='flex items-center gap-2 text-xs text-blue-400 sm:bg-gray-800  w-62 p-2 rounded-full sm:justify-center'>
                <div className='rounded-full w-2 h-2 bg-blue-300 text-sm animate-pulse'/> AVAILABLE FOR NEW PROJECTS
            </div>
            <h1  className='text-[60px] font-bold  hidden sm:block'>Emmanuel <span className='primary'>Aka</span></h1>

            <div className='text-sm sm:text-xl text-blue-200 hidden sm:block'>Full-Stack Developer | UI/UX Designer | Data Analyst</div>
            <div className='text-3xl sm:hidden px-2 '>
                Full-Stack Developer <br />
                <span className='primary'>UI/UX Designer</span>
            </div>
            <div className='text-wrap text-xs mt-4 flex flex-wrap hero-text text-gray-400 sm:text-white '>Creating digital experience through the lense of a mathematical architect and the soul of a publisher. Specializing in high performance web applications and data-driven visual storytelling.</div>

                  <div className='mt-6 flex hero-button gap-4'>
                      <a href='/emmanuelAka-cv.pdf' className='bgColor p-2 flex items-center justify-center text-black rounded-md text-xs'>Download CV</a>
                      <a href='#projects' className='hero-button-2'>View Projects</a>
                  </div>

            <div className='sm:flex mt-6 gap-3 hidden '>
                <div className='bg-gray-800 w-42 h-12 cursor-pointer flex-row rounded-md items-center flex gap-2 px-1 transform-transition ease-in-out duration-500 hover:scale-75 hover:-translate-y-1'>
                    <Icon icon='map-pin' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs text-gray-500'>LOCATION</div>
                        <div className='text-sm font-poppins-100'>
                            Lagos, Nigeria
                        </div>
                    </div>
                </div>
                 <div className='bg-gray-800 w-56 h-12 cursor-pointer flex-row rounded-md items-center flex gap-2 px-1 transform-transition ease-in-out duration-500 hover:scale-75 hover:-translate-y-1'>
                    <Icon icon='mail' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs font-poppins-100 text-gray-500'>EMAIL</div>
                        <div className='text-xs font-poppins-100'>
                            akaofemmanuel@gmail.com
                        </div>
                    </div>
                </div>

                 <div className='bg-gray-800 w-42 cursor-pointer h-12 flex-row rounded-md items-center flex gap-2 px-1 transform-transition ease-in-out duration-500 hover:scale-75 hover:-translate-y-1'>
                    <Icon icon='github' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs text-gray-500 font-poppins-100'>GIT_HUB</div>
                        <div className='text-xs font-poppins-100'>
                            rigid_rhymes
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </section>

        {/* Right section */}
        <section className='lg:w-[50%]' ref={ref}>
            <div
                className='w-full items-center justify-end  relative hidden sm:flex'>
                <div className='w-75 h-80 bg-radial from-gray-600 to-[#0F172A] drop-shadow-xl shadow-gray-900 rounded-lg relative flex justify-center items-center overflow-hidden'>
                    <Image src={corporate} alt='hero-image' className='w-80 h-120 hidden sm:block'/>

                </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9}}
                        animate={ inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{duration: 0.8}}
                        className='absolute bottom-2 left-35 h-22 w-32 bgColor rounded-md flex-col items-center justify-center transform-transition ease-in-out duration-500 hover:scale-75 hover:-translate-y-1'>
                        <div
                            className='p-2'
                        >
                            <p className='text-3xl secondary font-poppins-400 font-bold'>{count}+</p>
                            <p className='text-[10px] secondary font-poppins-100 font-bold'>YEARS OF EXPERIENCE</p>
                        </div>
                    </motion.div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
