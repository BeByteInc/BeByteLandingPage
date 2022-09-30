import { motion } from 'framer-motion'
import React from 'react'
import ServiceCard from './ServiceCard'

type Props = {}

export default function Services({ }: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='productsDiv'>
      <h3 className='title'>
        Services
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10'>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
      </div>
    </motion.div>
  )
}