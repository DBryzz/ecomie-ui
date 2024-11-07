import React from 'react'
import ImageComponent from '../atoms/ImageComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from "../atoms/Button"


export default function Hero() {
  return (
    <>
    <div className='flex text-black'>
     <div className="header" >
     <h1 className='text-black text-5xl font-bold'>Learn Today Be A <br/> Champoin Tomorrow</h1>
    <div className='mt-3'>
    <span></span>
    <p className="mt-2 text-xl mb-2">And be the best at what you do </p>
     <p className="mb-2 text-xl"> 100+ online exclusivce courses</p>
     <p className="mb-2 text-xl">best instructor on live courses</p>
     <p className="mb-2 text-xl">Get Certificate</p>
    </div>
     <div className="flex">
     <Button text="Let's learn more" className="bg-green-500 mb-11"/>
     <div>
     <FontAwesomeIcon icon={faStar} className="mr-4 ml-11"/>
     <FontAwesomeIcon icon={faStar} className="mr-4"/>
     <FontAwesomeIcon icon={faStar} className="mr-4"/>
     <FontAwesomeIcon icon={faStar} className="mr-4"/>
     <span>(30+ review)</span>
     </div>
     </div>
     </div>
     <ImageComponent className="pt-56" src='/images/hero-2-removebg-preview.png' width={700} height={600}/>
    
     
    </div>
    </>
    
  )
}
