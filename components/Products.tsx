import { motion } from 'framer-motion'
import React from 'react'
import ServiceCard from './ServiceCard'

type Props = {}

export default function Products({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='title'>
        Products
      </h3>

      <div className='relative w-full flex overflow-x-scroll 
      overflow-y-hidden snap-x snap-mandatoryz-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-gray-900/80'>
        {projects.map((project,index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col 
          space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <img
              src="/mobile.png"
              alt=""
            />
            <div>
              <h4 className='text-2xl font-semibold'>Lorem Ipsum Mobile App</h4>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-gray-900/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>)
}