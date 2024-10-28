import React from 'react'
import Image from 'next/image'

export default function ImageComponent({src, alt, width, height}) {
  return (
    <div>
      <img src={src} alt={alt} width={width} height={height}></img>
    </div>
  )
}
