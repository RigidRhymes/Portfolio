'use client'

import React, {useState} from 'react'
import Icon from "feather-icons-react"


const Contact = () => {
    const [status, setStatus] = useState('')
    const [formData, setFormData] = useState({name: '', email: '', message: ''})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        const formData = new FormData(e.currentTarget);

        const body = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await res.json();
        if (data.success){
            setStatus('Message sent successfully!');
            setFormData({name: '', email: '', message: ''});

            setTimeout(() => setStatus(''), 5000)
        }else {
            setStatus('Failed to send message');
            setTimeout(() => setStatus(''), 5000)
        }
    }

    return (
        <div className='px-6 w-full' id="contact">
            <section className='-bg-linear-120   from-[#192540] to-[#274c57] at-top rounded-2xl mb-12 w-full h-auto flex flex-row justify-between contact'>
                <div className=' flex-wrap px-6'>
                    <div className='mt-4 font-bold' style={{fontSize: "1.5rem"}}>Let&apos;s build the <span className='primary'>next</span> chapter.</div>
                    <p className='text-wrap text-xs mt-4'>Currently accepting commissions for high-impact web applications, branding, and data visualization projects.</p>

                    <div className='flex flex-col gap-2 mt-6'>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='h-10 w-10 p-3 items-center flex justify-center rounded-md black'>
                                <Icon icon="phone" className='text-sm primary' />
                            </div>
                            <p className='text-xs'>+2348125509230</p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <div className='h-10 w-10 p-3 items-center flex justify-center rounded-md black'>
                                <Icon icon="mail" className='text-sm primary' />
                            </div>
                            <p className='text-xs'>akaofemmanuel@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full gap-4 flex flex-col justify-center '>

                    <form
                        onSubmit={handleSubmit} className='relative'
                    >
                   <div className='flex sm:flex-row flex-col items-center sm:items-start justify-center gap-4'>
                       <div className='mt-2 flex flex-col'>
                           <label className='text-gray-400 text-xs'>NAME</label>
                           <input
                               value={formData.name}
                               onChange={handleChange}
                               type="text"
                               name="name" className='h-10 w-72 p-4 rounded-md bg-black px-3 text-sm mt-1' placeholder='Your Name' />
                       </div>
                       <div className='sm:mt-2 mt:1 flex flex-col'>
                           <label className='text-gray-400 text-xs'>EMAIL</label>
                           <input
                               value={formData.email}
                               onChange={handleChange}
                               type="email" name="email" className='h-10 w-72 p-4 rounded-md bg-black px-3 text-sm mt-1' placeholder='Your email' />
                       </div>
                   </div>

                    <div className='justify-center flex w-full mt-2'>
                        <div className='flex flex-col'>
                            <label className='text-gray-400 text-xs'>MESSAGE</label>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                className='bg-black sm:mt-2 mt-1 sm:w-150 w-72 px-2 p-2 text-xs h-32 rounded-md'/>
                        </div>
                    </div>
                    <div className='flex justify-center mb-2 mt-4'>
                        <button type='submit' className='sm:w-150 w-72 p-2 bgColor rounded-md cursor-pointer text-black'>Send Inquiry</button>
                        {status && <p className='text-xs text-gray-400 text-center absolute top-0 left-0'>{status}</p>}
                    </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Contact
