import React from 'react'

export default function Header() {
  return (
        <div className='container mx-auto flex flex-col md:flex-row items-center md:justify-between py-10'>
            <div><img style={{width: '50px'}} src="./../../assets/logo.png" alt="" /></div>
            <div className='flex gap-10'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='font-bold flex items-center border  px-3 rounded-lg bg-transparent gap-1'><span>0</span> Coin
                <img style={{width: '15px'}} src="./../../assets/coin.png" alt="" />
                </button>
            </div>
        </div>
  )
}
