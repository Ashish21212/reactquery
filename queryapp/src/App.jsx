import React from 'react'
import{NavLink} from 'react-router-dom'
const App = () => {
  return (
    <>
      <h1>The Awesome App</h1>
      <div className="nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
      </div>
    </>
  )
}

export default App
