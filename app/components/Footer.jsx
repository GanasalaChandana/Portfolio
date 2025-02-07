import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer
 = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2 '/>

            <div className='flex justify-center items-center gap-2 max-auto'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 '/>
                 <span>chandanacherry869@gmail.com</span>
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Chandana Ganasala. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/GanasalaChandana">Github</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/chandana-ganasala-656255191/">Linkedin</a>
                </li>
                <li>
                    <a target='_blank' href="https://x.com/Chandananaidu89">Twitter</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
