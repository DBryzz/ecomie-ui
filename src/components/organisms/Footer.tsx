import React from 'react'


export default function Footer() {
  return (
    <div className='bg-green-500 text-white'>
      <div className=' flex gap-10 pt-20 mt-16'>
     <div className='ml-11'>
     <h1 className='text-yellow-300 text-2xl font-extrabold'>LMS SYSTEEM</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     </div>
    <div className='ml-64'>
      <h1 className='text-xl font-bold mb-2 '>Company</h1>
      <p className='mb-2'>Lorem</p>
      <p>Lorem</p>
    </div>
    <div>
      <h1 className='text-xl font-bold mb-2'>important</h1>
      <p className='mb-2'>Lorem</p>
      <p>Lorem</p>
    </div>
    <div>
      <h1 className='text-xl font-bold mb-2'>Contact</h1>
      <p className='mb-2'>Lorem</p>
      <p>Lorem</p>
    </div>
    </div>
    <hr className='border-solid border-white pt-4'></hr>
    <h1 className='text-center text-2xl font-bold pt-10 pb-4'>Our Partners</h1>
   <div className='flex justify-items-center gap-5 partner'>
   <button className='bg-green-400 p-2 rounded-md'>Google</button>
   <button className='bg-green-400 p-2 rounded-md'>Google</button>
   <button className='bg-green-400 p-2 rounded-md'>Google</button>
  
   </div>
    
    </div>
  )
}
