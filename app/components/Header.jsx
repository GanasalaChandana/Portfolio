import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-24'>
        <motion.div
        initial={{ scale: 0 }} whileInView={{scale : 1}} transition={{duration: 0.8, type: 'spring', stifness: 100}}>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>
        <motion.h3  initial={{ y: -20, opacity: 0 }} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay: 0.3}} className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi, I'm Chandana! <Image src={assets.hand_icon} alt='' className='w-6'/>
        </motion.h3>
        <motion.h1  initial={{y:-30,opacity : 1 }} whileInView={{y:0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'> 
            Software Developer based in California, USA
        </motion.h1>
        <motion.p  initial={{ opacity: 0}} whileInView={{opacity : 1}} transition={{duration: 0.6, delay: 0.7}} className='max-w-2xl mx-auto font-Ovo'>
            I am a passionate software developer with a strong foundation in full-stack development. 
            I have experience in building web applications using React.js, Next.js, Spring Boot, and MongoDB.
            I am always eager to learn new technologies and improve my skills.
            I am currently looking for new opportunities to grow and contribute to exciting projects.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a initial={{y: 30,opacity : 0 }} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay: 1}} href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
            >Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a initial={{y: 30,opacity : 0 }} whileInView={{y:0, opacity: 1}} transition={{duration: 0.6, delay:1.2 }} href="/ChandanaGanasala_FS.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My Resume <Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default 
Header