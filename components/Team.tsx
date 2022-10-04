import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import TeamCard from './TeamCard'

type Props = {}

export default function Team({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='aboutDiv'>
      <h3 className='title'>
        Team
      </h3>

      <div className='py-12 grid gap-12 md:gap-12 md:grid-cols-2 justify-center items-center mt-12'>
        <div className='space-y-8 group'>
          <div className=' w-20 h-20 md:w-40 md:h-40 sm:w-32 sm:h-32 mx-auto rounded-[2rem] rotate-45 overflow-hidden'>
            <img src="/salih.jpg" alt="Salih" loading='lazy' className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 hover:scale-100' />
          </div>
          <div className='text-center mt-12'>
            <h5 className='text-sm sm:text-md md:text-l text-gray-800 font-semibold'>Salih UĞUR</h5>
            <span className='text-gray-500 text-md sm:text-l md:text-xl'>Full Stack Developer (Co-Founder)</span>
            <ul>
              <li>
                <SocialIcon
                  url="https://github.com/salihhugurr"
                  fgColor='black'
                  bgColor='transparent'
                />
                <SocialIcon
                  url="https://linkedin.com/in/salihhugurr/"
                  fgColor='blue'
                  bgColor='transparent'
                />
                <SocialIcon
                  url="https://instagram.com/ugurrsalihh"
                  fgColor='#b10e6e'
                  bgColor='transparent'
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='space-y-8 group'>
          <div className=' w-20 h-20 md:w-40 md:h-40 sm:w-32 sm:h-32 mx-auto rounded-[2rem] rotate-45 overflow-hidden'>
            <img src="/hashus.jpg" alt="Hasan" loading='lazy' className='w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 hover:scale-100' />
          </div>
          <div className='text-center mt-12'>
            <h5 className='text-sm sm:text-md md:text-l text-gray-800 font-semibold'>Hasan Hüseyin YURDAGÜL</h5>
            <span className='text-gray-500 text-md sm:text-l md:text-xl'>Data Scientist (Co-Founder)</span>
            <ul>
              <li>
                <SocialIcon
                  url="https://github.com/bytewaiser"
                  fgColor='black'
                  bgColor='transparent'
                />
                <SocialIcon
                  url="https://linkedin.com/in/bytewaiser/"
                  fgColor='blue'
                  bgColor='transparent'
                />
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </motion.div>
  )
}