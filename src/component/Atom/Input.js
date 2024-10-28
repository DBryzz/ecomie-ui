import React from 'react'


export default function Input({label, type, value, placeholder, className,onChange}) {
  return (
    <div>
      <input
      label ={label}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`w-96 h-4 p-8 bg-slate-50 text-white text-2xl font-semibold rounded-md ${className}`}
      onChange={onChange}
      >
      </input>
    </div>
  )
}
