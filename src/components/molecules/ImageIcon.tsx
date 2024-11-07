import React from 'react'
import Icon from "@/src/components/atoms/Icon"
import ImageComponent from '../atoms/ImageComponent'


export default function ImageIcon({className,src, alt,children, width,height}:any) {
  return (
    <div className={`bg-green-500 flex gap-1 ${className}`}>
     <ImageComponent src={src} alt={alt} width={width} height={height}></ImageComponent>
     {children}
    </div>
  )
}
