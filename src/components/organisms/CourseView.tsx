import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'
import {SELLING_POINTS} from "../../constants/courseData"
import "../../styles/globals.css"
import Cards from "../molecules/Cards"

export default function CourseView() {
    const limitedCourse= SELLING_POINTS.slice(0,3)
  return (
    <>
    <div className='bg-green-100 mt-20 text-black list'>
    <h1 className="text-2xl font-extrabold text-center pt-11">POPULAR COURSES</h1>
    <p className='text-center text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
    <div className='flex gap-4 justify-center mt-16'>
      { limitedCourse.map(course=>(
        <Cards key={course.id} {...course}/>
      ))}
    </div>
    </div>
    </>
  )
}
