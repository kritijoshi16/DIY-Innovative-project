import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ProductListing from './Components/ProductListing'
import { AppProvider } from '../src/AppContext'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <AppProvider>
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
      </AppProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App