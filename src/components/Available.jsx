import React from 'react'

export default function Available() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between py-10'>
        <h2 className='font-bold text-xl'>Available Players</h2>
        <div className='join'>
          <button className='btn bg-[#E7FE29] join-item font-bold'>Available</button>
          <button className='btn bg-transparent join-item'>Selected(0)</button>
        </div>
      </div>
    </div>
  )
}
