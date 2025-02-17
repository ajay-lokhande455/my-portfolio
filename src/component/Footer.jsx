import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#272727] h-[80vh] rounded-t-4xl p-15'>
      <div className='flex justify-between text-white'>
        <h1 className='text-6xl font-semibold'>Lets Connect there</h1>
        <b className='flex px-4 rounded-full bg-orange-400'>Contact Me <MdArrowOutward size={28} /></b>
      </div>
    </div>
  )
}

export default Footer
