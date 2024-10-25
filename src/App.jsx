import Available from './components/Available'
import Banner from './components/Banner'
import Header from './components/Header'
import './index.css'
import Cards from './components/Cards'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  

  return (
    <div>
      
      {/* header section */}
     <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* available section */}
      <Available></Available>
      {/* dynamic section */}
      <Cards></Cards>
      {/* subscribe section */}
      <Subscribe></Subscribe>
      {/* Footer section */}
      <Footer></Footer>
    </div>
  )
}

export default App
