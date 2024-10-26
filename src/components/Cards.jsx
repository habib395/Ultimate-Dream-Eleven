import React, { useEffect, useState } from 'react'
import './Cards.css'
import Available from '../Available';
import Selected from '../Selected';

export default function Cards({isActive, handleIsActiveStatus, addPlayerSelected,  selectPlayers, playerRemoved}) {
  

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('/players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
        .catch(error => console.error('Error fetching players:', error));
    }, [])
  return (
    <div>

    <div className='container mx-auto'>
    <div>
      <div className='flex justify-between py-10'>
        <h2 className='font-bold text-xl'>Available Players</h2>
        <div className='join'>
          <button onClick={()=>handleIsActiveStatus("Available")} className= {`${isActive.cart? " btn active join-item ": " btn join-item"}`}>Available</button>
          <button onClick={()=>handleIsActiveStatus("Selected")}  className= {`${isActive.cart? " btn join-item ": " btn active join-item"}`}>Selected({selectPlayers.length})</button>
        </div>
      </div>
    </div>
    {isActive.cart?<Available isActive={isActive} players={players} addPlayerSelected={addPlayerSelected} handleIsActiveStatus={handleIsActiveStatus} selectPlayers={selectPlayers}></Available>:<Selected selectPlayers={selectPlayers} playerRemoved={playerRemoved}></Selected>}

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
        {/* selected player section start */}
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







