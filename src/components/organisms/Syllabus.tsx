import React from 'react'
import ImageComponent from '../atoms/ImageComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from '../atoms/Button'

export default function Syllabus() {
  return (
    <>
    <div className='flex gap-24 '>
      <ImageComponent
      src="/images/hero-image2.webp"
      width={400}
      height={300}
      className="ml-8 mt-5"/>
      
      <div>
      <h1 className='text-black text-center text-3xl font-extrabold mt-12 '>LEARN FROM ANYWHERE</h1>
      <p className='text-black text-center text-xl mt-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic numquam magni excepturi?</p>
     <div className='text-center mt-5'>
     <span className='text-yellow-300 text-4xl font-bold'>500</span><FontAwesomeIcon icon={faPlus} style={{color:"yellow"}} className='mr-6' size='xl'/>
      <span className='text-yellow-300 text-4xl font-bold'>500</span><FontAwesomeIcon icon={faPlus}style={{color:"yellow"}} className='mr-6' size='xl'/>
      <span className='text-yellow-300 text-4xl font-bold'>500</span><FontAwesomeIcon icon={faPlus} style={{color:"yellow"}} size='xl'/>
     </div>
     <button className='bg-deep-forest-green-300 p-4 rounded-md text-xl w-52 mt-6 ml-52' >Start Learning</button>
      </div>
      
      </div>
    </>
  )
}
