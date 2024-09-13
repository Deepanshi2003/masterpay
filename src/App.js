import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Pages/Services/Services'
import Scrolltotop from './Component/Scrolltotop'
import About from './Pages/About/About'
import Contactus from './Pages/Contactus/Contactus'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Scrolltotop>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contactus/>}/>
      </Routes>
      </Scrolltotop>
      </BrowserRouter>
    </div>
  )
}

export default App