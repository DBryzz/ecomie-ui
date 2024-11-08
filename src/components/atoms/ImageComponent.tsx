import React from 'react'
import Image from 'next/image'

export default function ImageComponent({src, alt, width, height,className}:any) {
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height} className={className}></img>
    </div>
  )
}
