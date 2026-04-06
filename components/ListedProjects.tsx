import React from 'react'

const ListedProjects = () => {
    return (
        <div className='project-preview px-6 gap-4'>
            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-32 mb-2 rounded-md'><h3>3D Portfolio</h3></div>
                <iframe src='https://build3d-model.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>3D Portfolio, Built with React, GSAP, Tailwindcss, React Three.js </div>
                <div>
                    <a href='https://build3d-model.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

            <div className='px-4 mt-4 h-[400px] w-[350px] flex-wrap flex bg-gray-800 rounded-xl'>
                <div className='bg-gray-800 p-1 w-full mb-2 rounded-md'><h3>Simple Greetings Card</h3></div>
                <iframe src='https://message-pi-three.vercel.app' width="350" height="200" className='rounded-md border-4 border-gray-600  '></iframe>
                <div className='text-[10px] font-normal'>Simple greetings, designed with NextJs, it collects your data and pass a greetings to you according to the time of the day</div>
                <div>
                    <a href='https://build3d-model.vercel.app' className='primary text-[10px] bg-gray-700 rounded-md h-12 p-2'>Visit Site</a>
                </div>
            </div>

        </div>
    )


}
export default ListedProjects
