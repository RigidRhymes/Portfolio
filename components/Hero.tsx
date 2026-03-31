import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='hidden lg:flex h-24'>
        </div>
      <div className='w-full flex flex-col justify-between lg:flow-row '>

            {/* Left section */}
        <section className='w-[50%]'>
              <div>
            <div className='flex items-center gap-2 text-xs text-blue-400 bg-gray-800  w-62 p-2 rounded-full justify-center'>
                <div className='rounded-full w-2 h-2 bg-blue-300'/> AVAILABLE FOR NEW PROJECTS
            </div>
            <h1  className='text-[72px] font-bold   '>Emmanuel <span className='primary'>Aka</span></h1>

            <div className='text-sm sm:text-xl text-blue-200'>Full-Stack Developer | UI/UX Designer | Data Analyst</div>
            <div className='text-wrap text-xs mt-4'>Creating digital experience through the lense of a mathematical architect and the soul of a publisher. Specializing in high performance web applications and data-driven visual storytelling.</div>
        </div>
        </section>

        {/* Right section */}
        <section className='lg:w-[50%]'>
            <div className='w-'>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Hero
