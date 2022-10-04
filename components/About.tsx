import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div 
        initial={{opacity:0}}
        whileInView={{ opacity:1}}
        transition={{duration:1.5}}
        className='aboutDiv'>
            <h3 className='title top-12'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.2,
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] border-2 border-gray-200"
                src="/logo.jpg"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>What does {" "}
                    <span className='text-gray-900 font-bold tracking-[3px]'>BeByte</span>
                    {" "}do?</h4>

                <p className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut tristique quam et enim sagittis porta. Duis eu posuere massa.
                    Aenean sodales sagittis elit, ac dictum tellus. Phasellus nisl risus,
                    congue id gravida vitae, consequat ut lacus. Etiam viverra neque sed felis
                    volutpat tincidunt. Cras blandit mauris libero, quis consequat velit egestas
                    eu. Nullam leo nisl, placerat eu ex in, tempus tincidunt velit. Proin in
                    lacus commodo, pharetra nulla vel, vehicula tortor. Sed lobortis magna ut
                    velit scelerisque, et tempus purus tempor. Integer dignissim, ante sed
                    porta molestie, nisl sem mattis arcu, sit amet tempor ligula nunc vel tortor.
                    Aenean maximus placerat scelerisque. Nulla nec imperdiet nisl. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut tristique quam et enim sagittis porta. Duis eu posuere massa.
                    Aenean sodales sagittis elit, ac dictum tellus. Phasellus nisl risus,
                    congue id gravida vitae, consequat ut lacus. Etiam viverra neque sed felis
                    volutpat tincidunt. 
                </p>
            </div>
        </motion.div>
    )
}