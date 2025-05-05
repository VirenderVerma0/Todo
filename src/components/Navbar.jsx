import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  
  return (

    <nav className=" flex justify-between w-auto bg-indigo-900 text-white py-2">
      <div className="logo">
      <NavLink to="/"  className='text-xl font-bold mx-6'>iTask</NavLink>
      </div>
      <div className=' flex mx-7 gap-5 '>
        <NavLink to="/"  className='hover:font-bold transition-all' >Home</NavLink>
        <NavLink to="/about" className='hover:font-bold transition-all' >About</NavLink>
        <NavLink to="/task"  className="hover:font-bold transition-all" >Your Task</NavLink>
        

      </div>

    </nav>

  )
}

export default Navbar
