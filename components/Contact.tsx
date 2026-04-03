import React from 'react'
import Icon from "feather-icons-react"


const Contact = () => {
    return (
        <div className='px-6 w-full' id="contact">
            <section className='-bg-linear-120   from-[#192540] to-[#274c57] at-top rounded-2xl mb-12 w-full h-auto flex flex-row justify-between contact'>
                <div className=' flex-wrap px-6'>
                    <div className='mt-4 font-bold' style={{fontSize: "1.5rem"}}>Let&apos;s build the <span className='primary'>next</span> chapter.</div>
                    <p className='text-wrap text-xs mt-4'>Currently accepting commissions for high-impact web applications, branding, and data visualization projects.</p>

                    <div className='flex flex-col gap-2 mt-6'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='h-10 w-10 p-3 items-center flex justify-center rounded-md neutral'>
                                <Icon icon="phone" className='text-sm primary' />
                            </div>
                            <p className='text-xs'>+2348125509230</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='h-10 w-10 p-3 items-center flex justify-center rounded-md neutral'>
                                <Icon icon="mail" className='text-sm primary' />
                            </div>
                            <p className='text-xs'>akaofemmanuel@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full gap-4 flex flex-col justify-center '>

                   <div className='flex sm:flex-row flex-col items-center sm:items-start justify-center gap-4'>
                       <div className='mt-2 flex flex-col'>
                           <label className='text-gray-400 text-xs'>NAME</label>
                           <input type="text" className='h-10 w-72 p-4 rounded-md bg-black px-3 text-sm mt-1' placeholder='Your Name' />
                       </div>
                       <div className='sm:mt-2 mt:1 flex flex-col'>
                           <label className='text-gray-400 text-xs'>EMAIL</label>
                           <input type="email" className='h-10 w-72 p-4 rounded-md bg-black px-3 text-sm mt-1' placeholder='Your email' />
                       </div>
                   </div>

                    <div className='justify-center flex w-full mt-2'>
                        <div className='flex flex-col'>
                            <label className='text-gray-400 text-xs'>MESSAGE</label>
                            <textarea className='bg-black sm:mt-2 mt-1 sm:w-150 w-72 px-2 h-32 rounded-md'/>
                        </div>
                    </div>
                    <div className='flex justify-center mb-2'>
                        <button className='sm:w-150 w-72 p-2 bgColor rounded-md cursor-pointer text-black'>Send Inquiry</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact
