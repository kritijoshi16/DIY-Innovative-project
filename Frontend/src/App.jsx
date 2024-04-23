import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import {SnackbarProvider} from 'notistack'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'


const App = () => {
  return (
    <div>
      <SnackbarProvider/>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Contactus' element={<Contactus />} />

    

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App