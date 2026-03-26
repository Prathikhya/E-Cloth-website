import Navbar from '@/components/Navbar'
import { useState } from 'react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, User, Heart, Sun, Moon } from 'lucide-react';
import NavbarMo from '@/components/NavbarMo';


const Headers = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <header >

      <div className='flex justify-around items-center py-2 px-4'>
        <Link to="/" className="text-2xl font-bold text-orange-700">
          Try<span>IT.</span>
        </Link>

        {/* desktop & tablet view */}
        <Navbar />

        {/* search input */}


        <div className="flex items-center w-72 relative">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>


        {/* Login , wishlist , shoppingcart, modes*/}
        <div className="flex gap-4">

          <div>
            <Link to="/wishlist" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
              <Heart className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <Link to="/cart" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
              <User className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <Link to="/login" className="flex items-center gap-2 text-gray-600 hover:text-red-600">

              {/* Toggle between Sun and Moon icons based on the current theme */}
              {isDarkMode ? <Moon className="h-5 w-5"
                onClick={toggleDarkMode} /> : <Sun className="h-5 w-5"
                  onClick={toggleDarkMode} />}
            </Link>
          </div>
        </div>

      </div>


      {/* mobile view */}
      <NavbarMo />



    </header>
  )
}

export default Headers