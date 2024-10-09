import React from 'react'
import Logo from './Logo'
import { BsSearch } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

 

const Header = () => {
  return (
    // header part
   <header className='h-16 shadow-md bg-white'>
            
      {/*logo part */}
    <div className='h-full container mx-auto flex items-center px-4 justify-between'>
    <div className=''>   
     {/* passing props in logo component */}
      <Link to = {"/"}>
           <Logo w = {90} h = {50}/>
      </Link>
    </div>

         {/* Search Bar part */ }
      <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
        <input type="text" placeholder='search product here....' className = 'w-full outline-none'/>
         
        {/*search icon image */}
        <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
        <BsSearch />
        </div>
      </div>

                  {/* user icons and card part*/}
      <div className='flex items-center gap-5'>

                       {/*user a/c logo*/}
        <div className='text-3xl cursor-pointer'>
        <HiOutlineUserCircle />
        </div>

                     {/*Add to cart logo*/}
        <div className='text-2xl relative'>
           <span><FaShoppingCart /></span>

                 {/*no of item in the cart*/}
           <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 item-center justify-center absolute -top-2 -right-3'>
             <p className='text-xs'>0</p>
           </div>
        </div>

      

      {/*login button*/}
      <div >
         <Link to = {"/login"} className='px-3 py-1 rounded-full  text-white bg-red-600 hover: bg-red-700 '>Login</Link>
      </div>

     </div>
    </div>
   </header>
  )
}

export default Header
