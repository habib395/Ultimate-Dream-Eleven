
import './index.css'
import Cards from './components/Cards'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import { useState } from 'react'
import Banner from './components/Banner'


function App() {

  const [balance, setBalance] = useState('0')
  const addStaticValue = () =>{
  const amountToAdd = 6000000
  setBalance((prevBalance) => (parseFloat(prevBalance) + amountToAdd).toString())
  }

  const [isActive, setIsActive] = useState({
    cart : true,
    status : "Available"
  }
  )
  const handleIsActiveStatus = (status) =>{
    if(status == "Available"){
      setIsActive({
        cart : true,
        status : "Available"
      })}
       else{
        setIsActive({
          cart:false,
          status :"selected"
        })
      }     
  }


  const [selectPlayers, setSelectedPlayers] = useState([])
  const [preparePlayer, setPreparePlayer] = useState([])
  const addPlayerSelected = selected =>{
    const isExist = selectPlayers.find(
      previousSelected => previousSelected.playerId === selected.playerId
    )
    if(!isExist){
      setSelectedPlayers([...selectPlayers, selected])
    }else{
      alert('Already Existed.')
    }
  }
  const playerRemoved = id => {
    const removedPlayer = selectPlayers.find( player => player.playerId === id)
    const updatePlayer = selectPlayers.filter(player => player.playerId !== id)
    setSelectedPlayers(updatePlayer)
  }

  return ( 
    <div>
      
      <div className='sticky top-0 flex flex-col md:flex-row items-center md:justify-between bg-gradient-to-b from-[#F9F7F3] to-[#F9F7F3]/50 py-10 z-50 px-10'>
            <div><img style={{width: '50px'}} src="/logo.png" alt="" /></div>
            <div className='flex gap-10'>
                <p>Home</p>
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <button className='flex items-center border  px-3 rounded-lg bg-transparent gap-1'><span>{balance}</span> Coin
                <img style={{width: '15px'}} src="/coin.png" alt="" />
                </button>
            </div>
           </div>

      {/* header section */}
     {/* Banner Section */}
     <Banner addStaticValue={addStaticValue}></Banner>
      {/* dynamic section */}
      <Cards isActive={isActive} handleIsActiveStatus={handleIsActiveStatus} addPlayerSelected={addPlayerSelected} selectPlayers={selectPlayers} playerRemoved={playerRemoved}></Cards>
      {/* subscribe section */}
      <Subscribe></Subscribe>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  )
}

export default App
