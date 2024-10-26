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
      <div className='flex justify-end py-6'>
        <div className='join'>
          <button onClick={()=>handleIsActiveStatus("Available")} className= {`${isActive.cart? " btn active join-item ": " btn join-item"}<Available`}>Available</button>
          <button onClick={()=>handleIsActiveStatus("Selected")}  className= {`${isActive.cart? " btn join-item ": " btn active join-item"}`}>Selected({selectPlayers.length})</button>
        </div>
      </div>
    </div>
    {isActive.cart?<Available isActive={isActive} players={players} addPlayerSelected={addPlayerSelected} handleIsActiveStatus={handleIsActiveStatus} selectPlayers={selectPlayers}></Available>:<Selected selectPlayers={selectPlayers} playerRemoved={playerRemoved} isActive={isActive} handleIsActiveStatus={handleIsActiveStatus}
    ></Selected>}
    </div>
    </div>
  )
}







