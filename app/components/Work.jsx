
import { workData } from '@/assets/assets'  ;
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.3,duration:0.5}} className='text-center mb-2 text-lg font-Ovo'>My Work</motion.h4>
            <motion.h2 initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.3,duration:0.5}} className='text-center text-5xl font-Ovo'>My Journey</motion.h2>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7,duration:0.5}} className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                A selection of my work that I have done over the years that showcase my skills and Problem -solving abilities.
            </motion.p>
    
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9,duration:0.6}}className='space-y-8 dark:text-black'>
                {workData.map(({title, date, description}, index) => ( 
                    <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}} key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-x-1 duration-500  dark:hover:bg-darkHover dark:hover:shadow-white'>
                        <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:0.3,duration:0.5}} className='text-xl font-semibold text-gray-800 mb-2 dark:text-white'>{title}</motion.h3>
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7,duration:0.5}} className='text-md text-gray-600 mb-4 dark:text-white/80'>{date}</motion.p>
                        <motion.ul initial= {{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 0.8, delay:1}} className='text-sm text-gray-600 leading-6 list-disc list-inside space-y-2 dark:text-white/80'>
                            {description.map((desc, i) => (
                                <motion.li whileHover={{scale:1.1}} key={i}>{desc}</motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
  )
}

export default Work