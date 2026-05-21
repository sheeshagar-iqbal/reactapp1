import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Link to='home' style={{padding:'10px'}}>Home</Link>
    <Link to='about' style={{padding:'10px'}}>about</Link>
    <Link to='contact' style={{padding:'10px'}}>contact</Link>

    <hr size='4' color='red' />

    <Outlet/>
    <hr size='4' color='red' />
    www.company.com all right reserved 2026

    
    </>
  )
}

export default Layout