import React, { useEffect, useState } from 'react'

export default function Cards() {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('/players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
        .catch(error => console.error('Error fetching players:', error));
    }, [])


  return (
    <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        {players.map(player =>(
            <div key={player.playerId} className="card bg-base-100 border">
        <figure>
          <img
            src={player.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
         <div className='border rounded-full p-1'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
         </div>
         <h3 className='font-bold'>{player.name}</h3>
          </h2>
           <div className='flex justify-between py-4'>
           <p className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
</svg>
{player.country}
            </p>
            <button className='btn btn-sm'>{player.role}</button>
           </div>
           <hr />
           <h2 className='text-xl font-bold'>Rating</h2>
           <div className='flex justify-between'>
            <h2 className='font-semibold text-base'>Left-Hand-Bat</h2>
            {player.battingType}
           </div>
           <div className='flex justify-between'>
            <h2 className='font-semibold text-base'>Price :{player.biddingPrice}</h2>
            <button className='btn btn-sm bg-transparent'>Choose Player</button>
           </div>
        </div>
      </div>
        ))}
    </div>
  )
}
