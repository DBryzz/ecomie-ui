import React from 'react'
import Link from 'next/link'
import "../../styles/globals.css"
import Button from '../atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
export default function Navbar() {
  return (
    <div className='flex  '>
      <Link href='/' className='text-blue-500 font-bold text-3xl mx-40 my-9'><span className='text-black font-extrabold'>LMS</span>system</Link>
      <div className='mx-24 my-9'>
      <Link href='/' className='text-black font-bold text-2xl hover:text-blue-400 '>Home</Link>
      <Link href='/' className='text-black font-bold text-2xl mx-4  hover:text-blue-400 '>About</Link>
      <Link href='/' className='text-black font-bold text-2xl mx-4  hover:text-blue-400 '>Courses</Link>
      <Link href='/' className='text-black font-bold text-2xl mx-4  hover:text-blue-400 '>Contact</Link>
      </div>
      <FontAwesomeIcon icon={faCartPlus} size='lg' color='black' className='mt-11' />
      <Button type="buttton" text="Login" className= "ml-7 bg-blue-600 my-8 rounded-full py-3 px-6  text-xl font-bold"/>
    </div>
  )
}
