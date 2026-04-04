import React from "react"
import Image from "next/image";
import * as THREE from "three"



type ProjectCardProps = {
    title: string
    description: string
    tools: string
    image: any
}

const ProjectCards = ({ title, description, tools, image }: ProjectCardProps) => {
    const items = tools.split(",").map(item => item.trim())

    // Define spans for each layout type
    return (
        <div className='project'>
            <div className='flex items-center justify-center  project-image'>
                {image && (
                    <Image src={image} alt="title" objectFit="cover" className='rounded-md items-center justify-center'/>
                )}
            </div>
            <div className='project-text' style={{position: "absolute", bottom: "30px", left: "10%"}}>

                <ul className="flex flex-wrap gap-2">
                    {items.map((desc, i) => (
                        <span
                            key={i}
                            className="project-cap"
                        >
            {desc}
          </span>
                    ))}
                </ul>
                <h3 className=" font-semibold text-white" style={{fontSize: "15px"}}>{title}</h3>
                <p className="text-[10px] text-gray-300 mb-2">{description}</p>

            </div>
        </div>
    )
}

export default ProjectCards
