import React from 'react'
import ImageComponent from '../atoms/ImageComponent'
import Image from "next/image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Cards({title, body, image, ratings, name,email}:any) {
  return (
    <>
    <div className='w-80 rounded-2xl shadow-lg overflow-hidden'>
    <Image src={image} alt={title} width={300} height={20} className="w-80"/>
   <div className='bg-white px-6 py-4 lg:h-44'>
     <div className="flex gap-2">
      <h2 className='tracking-widest text-sm text-green-500 font-bold'>{name}</h2>
      <FontAwesomeIcon icon={faStar} style={{color:"yellow",}} className='ml-32'/> <span>{ratings}</span>
      </div>
      <h2 className='tracking-widest text-2xl text-black font-bold'>{title}</h2>
     <p className='text-gray-700'>{body.slice(0, 0)}</p>
     <div className='flex gap-4 mt-4'>
     <Image src={image} alt={title} width={40} height={40} className='rounded-full'/>
     <div>
      <p>instructor</p>
      <p>{email}</p>
     </div>
     </div>
   </div>
    </div>
    
</>
  )
}

