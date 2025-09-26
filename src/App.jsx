import './App.css'
import Navbar from './Components/Navbar/navbar'
import HeroSection from './Components/HeroSection/heroSection'
import Categories from './Components/HomeCategories/categories'
import Preview from './Components/HomePreview/preview'
import Footer from './Components/footer/footer'

function App() {

  return (
    <>
      <div className='bg-white'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Categories></Categories>
        <Preview></Preview>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
