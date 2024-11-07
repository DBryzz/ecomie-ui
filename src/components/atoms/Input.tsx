import React from 'react'


export default function Input({label, type, value, placeholder, className,onChange}:any) {
  return (
    <div className={`w-96 h-2  text-black text-xl font-semibold rounded-md  w-20 ${className}`}>
      <input
      type={type}
      value={value}
      placeholder={placeholder}
      
      onChange={onChange}
      >
      </input>
   
    </div>
  )
}
