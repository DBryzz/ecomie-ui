import React from 'react'


export default function Button({type, onClick, className,children}) {
  return (
    <div>
      <button
       type={type}
       onClick={onClick}
       className={`px-4 py-2 bg-green-400  text-white rounded-md ${className}`}
      >
        {children}
      </button>
    </div>
  )
}
