import React from 'react'
import Cards from '../molecules/Cards'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Experts() {
  return (
   <>
   <div className='bg-gray-200 mt-14 p-10 experts'>
   <div className='w-80 rounded-2xl shadow-lg overflow-hidden'>
    <Image src="/images/hero-image3.jpg" alt='experts.jpg' width={300} height={20} className="w-80"/>
   <div className='bg-white px-6 py-4 lg:h-44'>
     <div className="">
      <h2 className='tracking-widest text-sm text-green-500 font-bold'>teacher@lms.com</h2>
      </div>
      <h2 className='tracking-widest text-2xl text-black font-bold'>Aderson Smith</h2>
      <FontAwesomeIcon icon={faStar} style={{color:"yellow",}} className='text-black'/>
      <span className='text-black text-xs ml-2'>4.9</span>
      <span className='text-black text-xs ml-2'>(110 Reviews)</span>
      <hr className='border-solid border-black'></hr>
   </div>
    </div>
   </div>
   </>
  )
}
