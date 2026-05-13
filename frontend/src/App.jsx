import './styles/App.scss'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Main from './layouts/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Contact, Products, SingleProduct, AboutUs, Home} from './routes/index.js'
import LoaderScreen from './components/LoaderScreen.jsx'
import { useEffect } from 'react'
import { useLoader } from './context/LoaderContext.jsx'
function App() {
  
  return (
    <>  
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route  path='/about' element={<AboutUs />}/>
           <Route  path='/contact' element={<Contact />}/>
           <Route  path='/products' element={<Products />}/>
           <Route  path='/single-product' element={<SingleProduct />}/>
        </Routes>
      </Main>
      <Footer />
    <LoaderScreen />
    </BrowserRouter>
    </>
  )
}

export default App
