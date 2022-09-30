import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity:0
                }}
                whileInView={{ opacity:1,x: 0 }}
                viewport={{once:true}}
                transition={{
                    duration: 1.2,
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src="https://avatars.githubusercontent.com/u/61801619?s=400&u=c2191c4c769e95144d14b5af4b9c86b498165893&v=4"
            />
        </div>
    )
}