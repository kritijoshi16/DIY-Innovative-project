import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Admin = () => {
  return (
    <div>
       <Sidebar/>
        <div className='mt-5'>

        <Outlet/>
        </div>
    
       
    </div>
  )
}

export default Admin