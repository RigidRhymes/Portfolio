import React from 'react'
import Icon from "feather-icons-react"
import Image from 'next/image'
import corporate from '@/assets/corporate.png'


const Hero = () => {
  return (
    <div className='mb-16 px-6' id='hero'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center lg:flow-row sm:mt-24 mt-12 '>

            {/* Left section */}
        <section className='sm:w-[50%] '>
              <div>
            <div className='flex items-center gap-2 text-xs text-blue-400 sm:bg-gray-800  w-62 p-2 rounded-full sm:justify-center'>
                <div className='rounded-full w-2 h-2 bg-blue-300 text-sm animate-pulse'/> AVAILABLE FOR NEW PROJECTS
            </div>
            <h1  className='text-[60px] font-bold  hidden sm:block'>Emmanuel <span className='primary'>Aka</span></h1>

            <div className='text-sm sm:text-xl text-blue-200 hidden sm:block'>Full-Stack Developer | UI/UX Designer | Data Analyst</div>
            <div className='text-3xl sm:hidden px-2 '>
                Full-Stack Developer <br />
                <span className='primary'>UI/UX Designer</span>
            </div>
            <div className='text-wrap text-xs mt-4 flex flex-wrap'>Creating digital experience through the lense of a mathematical architect and the soul of a publisher. Specializing in high performance web applications and data-driven visual storytelling.</div>
            
            <div className='sm:flex mt-6 gap-3 hidden '>
                <div className='bg-gray-800 w-42 h-12 flex-row rounded-md items-center flex gap-2 px-1'> 
                    <Icon icon='map-pin' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs text-gray-500'>LOCATION</div>
                        <div className='text-sm font-poppins-100'>
                            Lagos, Nigeria
                        </div>
                    </div>
                </div>
                 <div className='bg-gray-800 w-56 h-12 flex-row rounded-md items-center flex gap-2 px-1'> 
                    <Icon icon='mail' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs font-poppins-100 text-gray-500'>EMAIL</div>
                        <div className='text-xs font-poppins-100'>
                            akaofemmanuel@gmail.com
                        </div>
                    </div>
                </div>

                 <div className='bg-gray-800 w-42 h-12 flex-row rounded-md items-center flex gap-2 px-1'> 
                    <Icon icon='github' className='w-6 h-6 primary'/>
                    <div className='flex-col tracking-tight'>
                        <div className='text-xs text-gray-500 font-poppins-100'>GIT_HUB</div>
                        <div className='text-xs font-poppins-100'>
                            rigid_rhymes
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        {/* Right section */}
        <section className='lg:w-[50%]'>
            <div className='w-full items-center justify-end flex relative '>
                <div className='w-75 h-80 bg-radial from-gray-600 to-[#0F172A] rounded-lg relative flex justify-center items-center overflow-hidden'>
                    <Image src={corporate} alt='hero-image' className='w-80 h-120 '/>

                </div>
                    <div className='absolute bottom-2 left-35 h-22 w-32 bgColor rounded-md flex-col items-center justify-center'>
                        <div className='p-2'>
                            <p className='text-3xl secondary font-poppins-400 font-bold'>15+</p>
                            <p className='text-[10px] secondary font-poppins-100 font-bold'>YEARS OF EXPERIENCE</p>
                        </div>
                    </div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
