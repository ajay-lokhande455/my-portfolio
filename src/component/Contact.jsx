import React, { useState } from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:lokhandeajay455@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; 
  };

  return (
    <div className='bg-[#F2F4F7] p-15 text-[#344054]'>
      <div className='text-5xl font-semibold text-center pb-6'>
        <h1>
          <span className='text-orange-400'>Contact</span> me
        </h1>
      </div>
      <div className='flex gap-10 py-7 justify-center items-center'>
        <div className='w-[50%] gap-20 p-5'>
          <img src={contact} alt="Contact" className='w-full h-auto' />
        </div>
        <div className='w-[50%] px-10 bg-[#272727] text-white py-5 shadow-lg rounded-lg'>
          <h1 className='text-3xl font-semibold mb-5'>Get in Touch</h1>
          <form className='space-y-4 text-white' onSubmit={handleSubmit}>
            <div>
              <label className='block py-2 text-xl font-medium'>Name</label>
              <input
                type='text'
                className='w-full px-3 py-2 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-orange-400 backdrop-blur-sm bg-white/5'
                placeholder='Your Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className='block py-2 text-xl font-medium'>Email</label>
              <input
                type='email'
                className='w-full px-3 py-2  border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-orange-400 backdrop-blur-sm bg-white/5'
                placeholder='Your Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className='block py-2 text-xl font-medium'>Message</label>
              <textarea
                className='w-full px-3 py-2 bg-white/5 border-[1px] border-gray-300 rounded-md focus:outline-none focus:border-orange-400 backdrop-blur-sm'
                rows='5'
                placeholder='Your Message'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button type='submit' className='px-5 py-2 bg-orange-400 text-white font-semibold rounded-full'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
