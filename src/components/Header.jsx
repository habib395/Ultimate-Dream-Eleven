import React, { useState } from 'react'
import Banner from './Banner';


export default function Header() {

  const [balance, setBalance] = useState('0')
  
 
  
  const addStaticValue = () =>{
    const amountToAdd = 6000000

    setBalance((prevBalance) => (parseFloat(prevBalance) + amountToAdd).toString())

  }
  return (
    <div>
      <div className='container mx-auto flex flex-col md:flex-row items-center md:justify-between py-10'>
            <div><img style={{width: '50px'}} src="./../../assets/logo.png" alt="" /></div>
            <div className='flex gap-10'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='flex items-center border  px-3 rounded-lg bg-transparent gap-1'><span>{balance}</span> Coin
                <img style={{width: '15px'}} src="./../../assets/coin.png" alt="" />
                </button>
            </div>
           </div>
            <Banner addStaticValue={addStaticValue}></Banner>
      </div>
  )
}
