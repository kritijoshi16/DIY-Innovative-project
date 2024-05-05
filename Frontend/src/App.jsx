import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'
import Home from './Components/Home'
import ManageUser from './Components/ManageUser'
import Navbar from './Components/Navbar'
import ProductListing from './Components/ProductListing'
import { AppProvider } from '../src/AppContext'
import Admin from './Components/admin'
import ManageProduct from './Components/admin/ManageProduct'
import UpdateProduct from './Components/admin/UpdateProduct'
import Feedback from './Components/Feedback'


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
        <Route path='/Feedback' element={<Feedback />} />
        <Route path='/ManageUser' element={<ManageUser />} />

       <Route path='/admin' element={<Admin/>}>
        <Route path='manageproduct' element={<ManageProduct/>}/>
        <Route path='updateproduct' element={<UpdateProduct/>}/>

       </Route>
    

      </Routes>
      </AppProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App