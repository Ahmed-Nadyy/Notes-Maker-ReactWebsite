import React from 'react'
// import Navbar from '../Header/Navbar'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
// import Sticky from '../Sticky/Sticky'
import Header from '../Navbar/Header'

export default function SystemLayout() {
  return (
    <>
       <Header />
       <Home />
       
    </>
  )
}
