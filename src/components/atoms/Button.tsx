import React from 'react'


export default function Button({type, onClick, className,text}:any) {
  return (
    <div>
      <button
       type={type}
       onClick={onClick}
       className={`px-4 py-2 text-white  rounded-lg ${className}`}
      >
        {text}
      </button>
    </div>
  )
}
