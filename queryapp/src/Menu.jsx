import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import Home from './Home'

const Menu = () => {

  return (
    <>
    
      <Routes>
        <Route path='/' Component={()=><Home/>}/>
        <Route path='/products' Component={()=><Products/>}/>
      </Routes>

    </>
  )
}

export default Menu
