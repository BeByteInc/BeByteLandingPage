import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Lorem İpsum",
            "Lorem-ipsum.tsx",
            "<LoremIpsum/>"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto'
                src="https://i.pinimg.com/originals/3c/b0/d6/3cb0d6e4538a3f50a0f573fee777220b.jpg"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>BeByteInc</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#products">
                        <button className='heroButton'>Products</button>
                    </Link>
                    <Link href="#services">
                        <button className='heroButton'>Services</button>
                    </Link>
                    <Link href="#team">
                        <button className='heroButton'>Team</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}