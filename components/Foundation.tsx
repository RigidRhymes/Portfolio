'use client'

import React, {useRef} from 'react'
import Icon from 'feather-icons-react'
import book1 from "../assets/book1.png"
import Image from "next/image";
import book2 from "../assets/book2.png"
import { motion } from 'framer-motion';

interface IProps {
    card?: HTMLDivElement;
    children?: React.ReactNode;
    index: number;
}
const Foundation = () => {
    const  cardRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
        const card = cardRefs.current[index];

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        const rotateX = (mouseX / rect.width) * 40
        const rotateY = (mouseY / rect.height) * 50

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    const handleMouseLeave = (index: number) => () => {
        const card = cardRefs.current[index]
        if(!card) return;
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
    return (
        <motion.div
            initial={{opacity: 0, y: 20, scale: 0.95}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.3}}

            className=' w-full h-auto mb-12 '>
            <div className='px-6 w-full flex flex-col sm:flex-row'>
                <div className='mt-4 gap-4 w-full  foundation'>

                    {/*Left Column*/}
                    <div className=' flex flex-col '>
                        <p className='primary text-[12px] tracking-widest mt-16'>ACADEMIC FOUNDATION</p>
                        <div className='w-full mt-6 h-32 rounded-md bg-gray-800 p-4 text-wrap '>
                            <h3 className='text-xl text-gray-300'>BSc.Computer Science</h3>
                            <p className='text-gray-400 text-xs mb-2'>University of Benin|2017 - 2021</p>
                            <p className='text-gray-400 text-xs'>Focus on algorithms, database management, and human-computer interaction</p>
                        </div>
                        <p className='mt-4'>Certifications</p>

                        <div className='flex items-start justify-between mt-2 text-xs text-wrap flex-col gap-2'>
                        <div className='flex flex-row gap-4'>
                            <div className='fontStyle black'>
                                <Icon icon='award' className='primary'/>
                                Advanced Data Analytics (CISCO)
                            </div>
                            <div className='fontStyle black'>
                                <Icon icon='award' className='primary'/>
                                FreeCOdeCamps Full-Stack
                            </div>
                        </div>

                            <div className='flex flex-row gap-4'>
                                <div className='fontStyle black'>
                                    <Icon icon='award' className='primary'/>
                                    DIT Computer Engineering & Networking
                                </div>
                                <div className='fontStyle black'>
                                    <Icon icon='award' className='primary'/>
                                    Macrosolutions Desktop Publishing
                                </div>
                            </div>

                        </div>
                    </div>


                {/*    Right Column*/}

                   <div className='mt-16'>
                       <div className=' p-3 '>
                           <p className='primary text-[12px] tracking-widest mb-4'>PUBLISHING & AUTHORSHIP</p>
                           <div className=' '>
                               <div style={{display: "grid", gridTemplateColumns: "1fr 2fr", gap: 4, marginTop: 16}}>
                                   <div className='m-4'>
                                       <div className='w-25 h-25 bg-gray-800 rounded-md items-center justify-center flex '
                                            ref={(el) => {cardRefs.current[1] = el}} onMouseMove={handleMouseMove(1)} onMouseLeave={handleMouseLeave(1)}
                                            style={{perspective: "800px"}}
                                       >
                                           <Image src={book1} alt='book display' objectFit='contain' style={{ width: '100px', height:'100px'}}/>
                                       </div>
                                   </div>
                                   <div className=''>
                                       <h3 className='text-sm mb-2'>Organic Chemistry PANACEA</h3>
                                       <p className='text-[10px] text-gray-400'>
                                           A masterpiece Organic Chemistry Text-Book, solutions to Organic Chemistry Problems for Senior Secondary School and Freshman University
                                       </p>
                                       <p className='italic text-[10px] mt-2'>-Ofeimu Gary Emmanuels</p>
                                   </div>
                               </div>

                               <div style={{display: "grid", gridTemplateColumns: "1fr 2fr", gap: 4, marginTop: 16, }}>
                                   <div className='m-4' >
                                       <div
                                           ref={(el) => {cardRefs.current[0] = el}} onMouseMove={handleMouseMove(0)} onMouseLeave={handleMouseLeave(0)}
                                           style={{perspective: "800px"}}
                                           className=' bg-gray-800 rounded-md flex items-center justify-center transition-transform duration-200 ease-out will-change-transform perspective-600' >
                                           <Image src={book2} alt='book display' objectFit='contain' style={{ width: '100px', height:'100px'}}/>
                                       </div>
                                   </div>
                                   <div className=''>
                                       <h3 className='text-sm mb-2'>Understanding Christian Religious Studies</h3>
                                       <p className='text-[10px] text-gray-400'>
                                           A masterpiece Organic Chemistry Text-Book, solutions to Organic Chemistry Problems for Senior Secondary School and Freshman University
                                       </p>
                                       <p className='italic text-[10px] mt-2'>-Desmond Osawaru</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Foundation
