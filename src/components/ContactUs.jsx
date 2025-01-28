import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ContactUs = () => {
    return (
        <div className='p-2 bg-gray-200 h-screen'>
            <h1 className='text-xl font-bold my-2'>Contact us</h1>
            <div className='contact font-bold'>

                <div className='flex items-center '>
                    <MdEmail className='text-xl' />
                    <span className='mx-2'>Email</span>
                </div>
                <p>workforeign@gmail.com</p>

                <div className='flex items-center my-2'>
                    <FaPhoneAlt className='text-xl' />
                    <span className='mx-2'>Phone No.</span>
                </div>
                <p>+44 (0) XXXX XXX XXX</p>

            </div>

            <form>
                <div className='flex flex-col p-2 '>
                    <label className='font-bold' htmlFor="name">Name</label>
                    <input className='p-2 bg-white rounded-md' type="text" placeholder='Enter Your Name' />
                </div>
                <div className='flex flex-col p-2 '>
                    <label className='font-bold' htmlFor="email">Email</label>
                    <input className='p-2 bg-white rounded-md' type="email" placeholder='Enter Your Email' />
                </div>
                <div className='flex flex-col p-2 '>
                    <label className='font-bold' htmlFor="email">Message</label>
                    <textarea className='p-2 bg-white rounded-md' name="message" id=""></textarea>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
