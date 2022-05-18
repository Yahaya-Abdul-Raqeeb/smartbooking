import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AddSites from "./components/AddSites"
import Footer from './components/Footer'

function App() {
  return (
    <>
<Navbar/>
<Routes>
 <Route path='/' element= {<Home/>}/>
 <Route path='/addsite' element= {<AddSites/>}/>
</Routes>
<Footer/>
    </>
  )
}

export default App