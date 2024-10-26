import React from 'react'

export default function Subscribe() {
  return (
    <div className='border  relative top-40 w-11/12 text-center md:w-3/4 mx-auto rounded-xl p-3 z-20'>
        <div  className='bg-cover bg-white border bg-no-repeat rounded-xl flex flex-col items-center py-10' style={{
        backgroundImage : 'url(/bg-shadow.png)',}}> 
        <h3 className='font-bold text-2xl py-2'>Subscribe to our Newsletter</h3>
        <p className='font-base py-2'>Get the latest updates and news right in your inbox!</p>
        <div className='flex flex-col md:flex-row gap-2'>
        <input type="text" placeholder="Enter your Email" className="input input-bordered" />
            <button className='btn bg-gradient-to-r from-[#ef855f] to-[#FFFF00]/50'>Subscribe</button>
        </div>
        </div>
    </div>
  )
}
