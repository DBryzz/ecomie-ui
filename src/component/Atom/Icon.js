import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Icon({icon, className, children}) {
  return (
    <div className="inline-grid grid-cols-2 gap-2" >
      <FontAwesomeIcon 
      icon={icon} 
      className={`w-8 ${className}`}
      
      > </FontAwesomeIcon>
     {children}
    </div>
  )
}
