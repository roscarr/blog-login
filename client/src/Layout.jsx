import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className=" p-5   max-w-screen-md mx-auto ">
        <Header/>
        <Outlet/>
    </main>
  )
}

export default Layout