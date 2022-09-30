import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ServiceCard({ }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#fffff] p-10 hover:opacity-100
    opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden border-2 border-gray-200'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] 
          xl:h-[200px] object-cover object-center border-2 border-gray-400"
        src="https://i.pinimg.com/originals/3c/b0/d6/3cb0d6e4538a3f50a0f573fee777220b.jpg"
        alt=""
      />

      <div className='px-0 md:px-10'>
        <div className='ml-'>
        <h4 className='text-4xl font-light'>Lorem</h4>
        <p className='font-bold text-2xl mt-1'>Ipsum</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
            alt=""
          />
          <img
            className='h-10 w-10 rounded-full'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
            alt=""
          />
        </div>
        <p className='uppercase py-5 text-gray-900'> Lorem ipsum dolor sit amet</p>
        </div>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Ut tristique quam et enim sagittis porta. Duis eu posuere massa.</li>
          <li>Ut tristique quam et enim sagittis porta. Duis eu posuere massa.</li>
          <li>Ut tristique quam et enim sagittis porta. Duis eu posuere massa.</li>
          <li>Ut tristique quam et enim sagittis porta. Duis eu posuere massa.</li>
        </ul>

      </div>

    </article>
  )
}