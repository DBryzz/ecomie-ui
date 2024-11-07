import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {SELLING_POINTS} from "../../constants/courseData"
import "../../styles/globals.css"

export default function CourseList() {
  return (
  <div  className=" ">
        <h1 className="text-5xl text-center font-extrabold text-black mt-11">Welcome to Lms system </h1>
        <p className="text-black text-center text-xl mt-6 mb-6">Users preference is our priority</p>
      <div className=" grid-container  ">
         {SELLING_POINTS.map(item => (
        <div className="bg-green-200 ml-6 rounded-lg flex ">
          <div >
          <h1 key={item.id} className=" p-2  text-center text-black text-xl font-extrabold hover:text-red">{item.title}</h1>
          <div className="flex gap-2 pl-11">
            <p className='text-black '> 5 courses </p>
            <p className='text-black'> 3 workshops </p>
            </div>
          </div>
         </div>
      
    ))}
      </div>
  </div>
  )
}
