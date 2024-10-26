import React from 'react'

export default function Available({isActive, players, addPlayerSelected, handleIsActiveStatus, selectPlayers}) {
  return (
    <div>
        
        <div className='container mx-auto'>
    <h2 className='font-bold text-2xl py-4'>Available Players</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {players.map(player =>(
            <div key={player.playerId} className="card bg-base-100 border">
        <figure>
          <img className='border w-96 h-72 rounded-lg mt-3'
          src={player.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
         <div>
         <i className="fa-solid fa-user"></i>
         </div>
         <p className='font-bold'>{player.name}</p>
          </h2>
           <div className='flex justify-between py-4'>
           <p className='flex items-center gap-2'>
           <i className="fa-solid fa-flag"></i>
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
            <button onClick={() => addPlayerSelected(player)} className='btn btn-sm bg-transparent'>Choose Player</button>
           </div>
        </div>
      </div>
        ))}
    </div>
    </div>

    </div>
  )
}
