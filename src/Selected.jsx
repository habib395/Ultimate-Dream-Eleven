import React from 'react'

export default function Selected({selectPlayers, playerRemoved}) {
  return (
    <div>
        
        <div className='container mx-auto'>
    <div>
      <div className='flex justify-between py-10'>
        <h2 className='font-bold text-xl'>Selected Players({selectPlayers.length}/6)</h2>
        <div className='join'>
          <button className='btn bg-transparent join-item'>Available</button>
          <button className='btn bg-[#E7FE29] join-item font-bold'>Selected({selectPlayers.length})</button>
        </div>
      </div>
    </div>
        

      <div className="container mx-auto grid grid-cols-1 gap-4">
        {
          selectPlayers.map(player => (
         <div key={player.playerId} className="border card card-side bg-base-100">
            <figure>
              <img className="border object-fill h-32 w-32 m-4 rounded-lg"
             src={player.image}
             alt="Movie" />
            </figure>
            <div className="card-body">
            <div className='flex justify-between items-center'>
            <div>
            <p className="text-xl font-bold">{player.name}</p>
            <p>{player.battingType}</p>
            </div>
           <button onClick={()=> playerRemoved(player.playerId)} className="btn bg-transparent">
           <i className="fa-solid fa-trash"></i>
           </button>
           
           </div>
            </div>
         </div>
          ))
        }

      </div>
      
        <button className='btn bg-[#E7FE29] px-4 font-bold my-6'>Add More Player</button>
        
        

    </div>

    </div>
  )
}
