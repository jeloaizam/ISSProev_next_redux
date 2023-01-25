import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Menu() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:3}}
    className='flex flex-col pt-5 text-left translate-x-[-3rem]'>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Match Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >League Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Cup Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Master League</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Practice Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Game Options</div></button>
        </Link>
        <Link href="#about">
            <button className='mt-2 button_menu_2 button_menu_2_animation btn'><div className="btn-text popins" >Information</div></button>
        </Link>
    </motion.div>
  )
}
