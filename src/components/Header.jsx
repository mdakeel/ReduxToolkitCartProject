import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Header = () => {
  const {carts} = useSelector((state) => state.cart)
  console.log(carts)

  return (
    <>
     <div className='flex w-full flex-row bg-gray-100 items-center justify-between px-20 h-[60px]'>
        <NavLink to={"/"} ><h1 className='text-2xl font-semibold cursor-pointer'>Redux Toolkit Cart Project</h1></NavLink>
        
        
        <NavLink to={"/cart"} > 
        <div className='flex items-center gap-1'>
          <p className='text-md font-semibold'>Cart : </p><span className='text-red-600 font-semibold'>{carts.length}</span>
        </div>
        </NavLink>
        </div>
        
    </>
  )
}

export default Header