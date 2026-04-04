'use client'


import React, {useEffect, useRef, useState} from 'react'
import {EXPERIENCE_ITEMS} from "@/lib/constants";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

gsap.registerPlugin(ScrollTrigger)

const Experiences = () => {

    const [colors, setColors] = useState<string[]>([])
    const containerRef = useRef<HTMLDivElement>(null)



    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card:any) =>{
            console.log(card)
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger:{
                    trigger: card,
                    start: 'top 80%'
                }
            })
        })

        gsap.utils.toArray('.timeline-segment').forEach((segment: any) => {
            const ring = segment.querySelector('.timeline-ring')
            const line = segment.querySelector('.gradient-line')
            const ringColor = ring.dataset.color

            gsap.from(line, {
                scaleY: 0,
                transformOrigin: 'top',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger:{
                    trigger: ring,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
            })

            const nextSegment = segment.nextElementSibling
            if(nextSegment){
                const nextRing = nextSegment.querySelector('.timeline-ring')
                const nextColor = nextRing.dataset.color
                gsap.to(nextSegment.querySelector('.gradient-line'), {
                    backgroundColor: nextColor,
                    scrollTrigger: {
                        trigger: nextRing,
                        start: 'top center',
                        toggleActions: 'play none none reverse'
                    }
                })
            }
        })

        gsap.to('.gradient-line',{
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger:{
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom center',
                onUpdate: (self) => {
                    gsap.to('.gradient-line',{
                        scaleY: 1 -self.progress,
                    })
                }

            }
        })
        gsap.utils.toArray('.expText').forEach((text:any) =>{
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger:{
                    trigger: containerRef.current,
                    start: 'top 60%'
                }
            })

            gsap.utils.toArray('.timeline-ring').forEach((ring:any, i) => {
                const ringColor = ring.dataset.color
                gsap.to('.gradient-line', {
                    background: ringColor,
                    scrollTrigger: {
                        trigger: ring,
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play reverse play reverse',
                    },
                })
            })
        }, containerRef)

    }, [])

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
                    <div className='gradient-line w-3 absolute left-4 top-0 h-full rounded'/>

                    <div className='flex flex-col gap-16 ml-2 -mt-2 expText w-full'>
                        {EXPERIENCE_ITEMS.map((item, index) => {
                            return (
                                <div key={index} className='timeline-segment flex flex-col items-start gap-6 w-full'>
                                    <div className='timeline-ring flex items-center justify-center z-50 timelin-ringer' style={{backgroundColor: colors[index], border: colors[index] ? `2px solid ${colors[index]}` : undefined}} data-color={colors[index]}>
                                        <FontAwesomeIcon icon={item.icon} className={`text-sm`}/>
                                    </div>
                                <div className='timeline-card flex justify-between items-start text-white text-xs flex-1 w-full main'>
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
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experiences
