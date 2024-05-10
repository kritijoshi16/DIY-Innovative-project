import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {SnackbarProvider} from 'notistack'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/admin/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'
import Home from './Components/Home'
import ManageUser from './Components/admin/ManageUser'
import Navbar from './Components/Navbar'
import ProductListing from './Components/ProductListing'
import { AppProvider } from '../src/AppContext'
import Admin from './Components/admin'
import ManageProduct from './Components/admin/ManageProduct'
import UpdateProduct from './Components/admin/UpdateProduct'
import Feedback from './Components/Feedback'
import ForgetPassword from './Components/ForgetPassword'
import ViewProduct from './Components/ViewProduct'
import Tutorial from './Components/Tutorial'
import Cart from './Components/Cart'
import { ProductProvider } from './Components/context/ProductContext'
import Checkout from './Components/Checkout/Checkout'
import ThankYou from './Components/Thankyou'
import OrderHistory from './Components/Orders'


const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <ProductProvider>
      <AppProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
       
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/ProductListing' element={<ProductListing />} />
        <Route path='/Feedback' element={<Feedback />} />
      
        <Route path='/ForgetPassword' element={<ForgetPassword />} />
        <Route path='/ViewProduct' element={<ViewProduct />} />
        <Route path='/Tutorial' element={<Tutorial />} />
        <Route path='/Cart' element={<Cart />} />

        <Route path='checkout' element={<Checkout/>}/>
        <Route path='thankyou' element={<ThankYou/>}/>
        <Route path='order' element={<OrderHistory/>}/>
      

       <Route path='/admin' element={<Admin/>}>
        <Route path='manageproduct' element={<ManageProduct/>}/>
        <Route path='updateproduct/:id' element={<UpdateProduct/>}/>
        <Route path='ManageUser' element={<ManageUser />} />
        <Route path='AddProduct' element={<AddProduct />} />

       </Route>
    

      </Routes>
      </AppProvider>
      </ProductProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App