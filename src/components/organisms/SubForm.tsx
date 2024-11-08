import React from 'react'
import Input from '../atoms/Input'

export default function SubForm() {
  return (
    <>
    <hr className='border-solid border-gray-300 mt-6'></hr>
    <div className='flex gap-9 mt-10'>
        <div className='text-black ml-14'>
            <h1 className='text-3xl font-extrabold'>Contact with Us</h1>
            <p className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        
      <input type="text" placeholder='Enter Email Address'  className='bg-gray-200 form rounded-md border-solid border-gray-300 text-black'/>
      <button className='bg-green-400 btn'>Subscribe</button>
    </div>
    </>
  )
}
