'use client'

import React from 'react'
import { WORKS_ITEMS } from "@/lib/constants"
import ProjectCards from "@/components/ProjectCards"
import {motion} from "framer-motion"

const Projects = () => {
    return (
        <div className='sm:mb-12 mb-6 px-6' id="projects">
            <div className="flex items-center justify-center mb-6">
                <p className="text-[10px] primary tracking-widest">SELECTED WORKS</p>
            </div>
            <div className='items-center justify-center sm:mb-6 mb-2 w-full gap-4 project-grid'>
                {WORKS_ITEMS.map((work, i) => {
                    const isSecondRow = Math.floor(i / 2) % 2 !== 0;
                    const isEvenItem = i % 2 === 0;

                    return (
                        <motion.div
                            key={i}
                            className={`
                                col-span-1 
                                sm:${isSecondRow
                                ? (isEvenItem ? "col-span-1" : "col-span-2")
                                : (isEvenItem ? "col-span-2" : "col-span-1")}
                                    relative transform-transition duration-500 ease-in-out 
                                    hover:scale-105 hover:-translate-y-1 hover:shadow-xl 
                                    hover:border-2 hover:border-gray-200 hover:rounded-xl
                                    `}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    >
                                    <ProjectCards title={work.title} description={work.description} tools={work.tools} image={work.image} />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

// @ts-ignore
export default Projects
