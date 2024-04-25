import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import {SnackbarProvider} from 'notistack'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'
<<<<<<< HEAD
import ProductListing from './Components/ProductListing'
=======
import Home from './Components/Home'
import Navbar from './Components/Navbar'
>>>>>>> 83ac1614515a3f031bb3b7d8267fdeca12599dfa


const App = () => {
  return (
    <div>
      <SnackbarProvider/>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/ProductListing' element={<ProductListing />} />

    

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App