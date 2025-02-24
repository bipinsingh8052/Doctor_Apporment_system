import React from 'react'
import Tonavbar from './Pages/Tonavbar'
import ToFooter from './Pages/ToFooter'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Tonavbar/>
      
<main>
    <Outlet/>
</main>
      <ToFooter/>
    </>
  )
}
