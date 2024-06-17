import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AddProduct from './Components/admin/AddProduct'
import Contactus from './Components/Contactus'
import './App.css'
import Home from './Components/Home'
import ManageUser from './Components/admin/ManageUser'
import ProductListing from './Components/user/ProductListing'
import { AppProvider } from '../src/AppContext'
import Admin from './Components/admin'
import ManageProduct from './Components/admin/ManageProduct'
import UpdateProduct from './Components/admin/UpdateProduct'
import Feedback from './Components/Feedback'
import ViewProduct from './Components/user/ViewProduct'
import Tutorial from './Components/user/Tutorial'
import Cart from './Components/user/Cart'
import { ProductProvider } from './Components/context/ProductContext'
import Checkout from './Components/Checkout/Checkout'
import ThankYou from './Components/user/Thankyou'
import OrderHistory from './Components/user/Orders'
import User from './Components/user'
import Dashboard from './Components/admin/Dashboard'
import About from './Components/About'
import AdminAuth from './AdminAuth'
import UserAuth from './UserAuth'
import ForgetPassword from './Components/ForgetPassword'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <ProductProvider>
            <AppProvider>
              {/* <Navbar/> */}
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/ForgetPassword' element={<ForgetPassword />} />

                <Route path='/Contactus' element={<Contactus />} />
                <Route path='/Feedback' element={<UserAuth><Feedback /></UserAuth>} />
                <Route path='/About' element={<About />} />

                <Route path='checkout' element={<Checkout />} />

                <Route path='/user' element={<User />}>
                  <Route path='ProductListing' element={<ProductListing />} />
                  <Route path='ViewProduct/:id' element={<UserAuth><ViewProduct /></UserAuth>} />
                  <Route path='Cart' element={<Cart />} />
                  <Route path='Tutorial' element={<UserAuth><Tutorial /></UserAuth>} />
                  <Route path='thankyou' element={<ThankYou />} />
                  <Route path='order' element={<OrderHistory />} />

                </Route>

                <Route path='/admin' element={<AdminAuth><Admin /></AdminAuth>}>
                  <Route path='manageproduct' element={<ManageProduct />} />
                  <Route path='updateproduct/:id' element={<UpdateProduct />} />
                  <Route path='ManageUser' element={<ManageUser />} />
                  <Route path='AddProduct' element={<AddProduct />} />
                  <Route path='dashboard' element={<Dashboard />} />

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