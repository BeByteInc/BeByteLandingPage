import { HomeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from "react-social-icons"

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-full mx-auto z-40 xl:items-center p-2 border-b-2 border-gray-200 bg-white'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center space-x-4 ml-10">
                <Link href="#hero">
                    <HomeIcon className='w-7 h-7 mr-2 cursor-pointer'/>
                </Link>
                <SocialIcon
                    url="https://github.com/BeByteInc"
                    fgColor='black'
                    bgColor='transparent'
                />
                {/* <SocialIcon
                    url="https://github.com/BeByteInc"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/BeByteInc"
                    fgColor='gray'
                    bgColor='transparent'
                /> */}
            </motion.div>

            <Link href="#contact">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='flex flex-row items-center text-white cursor-pointer mr-8'>
                    <SocialIcon
                        className='cursor-pointer flex flex-row'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-900'>Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    )
}