import Available from './components/Available'
import Banner from './components/Banner'
import Header from './components/Header'
import './index.css'

function App() {

  return (
    <div className='container mx-auto'>
      
      {/* header section */}
     <Header></Header>
      {/* banner section */}
      <Banner></Banner>
      {/* available section */}
      <Available></Available>
    </div>
  )
}

export default App
