import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Best Quality",
            "SAAS",
            "<BeByte/>"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto border-2 border-gray-200'
                src="/logo.jpg"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-900 pb-2 tracking-[15px]'>BeByteInc</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='rgb(17 24 39)' />
                </h1>
                <div className='pt-5 mt-5 space-x-4 hidden md:inline-block'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#services">
                        <button className='heroButton'>Services</button>
                    </Link>
                    <Link href="#products">
                        <button className='heroButton'>Products</button>
                    </Link>
                    <Link href="#team">
                        <button className='heroButton'>Team</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}