import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col pt-5 text-left translate-x-[-3rem]'>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Match Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >League Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Cup Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Master League</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Practice Mode</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Game Options</div></button>
        </Link>
        <Link href="#about">
            <button className='button_menu_2 btn'><div className="btn-text" >Information</div></button>
        </Link>
    </div>
  )
}
