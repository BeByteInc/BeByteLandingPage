import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Team({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='aboutDiv'>
      <h3 className='title'>
        Team
      </h3>
    </motion.div>)
}