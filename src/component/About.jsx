import React from 'react';
import profilepic from "../assets/profilepic.png";

const About = () => {
  return (
    <div className=' p-15 text-[#344054]'>
      <div className='text-5xl font-semibold text-center pb-6'>
        <h1>
          About <span className='text-orange-400'>Me</span>
        </h1>
      </div>
      <div className='flex gap-20 justify-center items-center py-7'>
        <div className='w-[50%]'>
          <h2 className='text-3xl font-semibold mb-5'>Hi, I'm Ajay!</h2>
          <p className='text-lg mb-5'>
            I'm a passionate software developer with a strong foundation in full-stack development. I love
            creating applications that solve real-world problems and learning new technologies to improve my
            skills.
          </p>
          <p className='text-lg'>
            My expertise includes Java, JavaScript, React.js, Node.js, and more. I am always seeking new
            challenges and opportunities to grow both personally and professionally.
          </p>
        </div>
        <div className='bg-[#F2F4F7] p-5 rounded-2xl'>
          <img
            src={profilepic}  // Replace with your actual image
            alt='Profile'
            className='w-full h-auto '
          />
        </div>
      </div>
    </div>
  );
};

export default About;
