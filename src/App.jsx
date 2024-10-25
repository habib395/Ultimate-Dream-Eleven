import Available from './components/Available'
import Banner from './components/Banner'
import Header from './components/Header'
import './index.css'
import Cards from './components/Cards'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import { useState } from 'react'
import Selected from './components/Selected'

function App() {

  const [selectPlayers, setSelectedPlayers] = useState([])

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
  console.log(selectPlayers)

  return (
    <div>
      
      {/* header section */}
     <Header></Header>
      {/* banner section */}
      {/* <Banner addStaticValue={addStaticValue}></Banner> */}
      {/* available section */}
      <Available></Available>
      {/* dynamic section */}
      <Cards addPlayerSelected={addPlayerSelected}></Cards>
      {/* selected players */}
      <Selected selectPlayers={selectPlayers}></Selected>
      {/* subscribe section */}
      <Subscribe></Subscribe>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  )
}

export default App
