import Navbar from '@/components/Navbar'
import { useState } from 'react';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, User, Heart, Sun, Moon } from 'lucide-react';
import NavbarMo from '@/components/NavbarMo';

const Headers = () => {

  // State to mange
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(' ');
  const [searchQuery, setSearchQuery] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // End to manage 

  return (
    <header>
      <div className='flex justify-between items-center py-2 px-4 '>
        <Link to="/" className="text-2xl font-bold text-orange-700">
          Try<span>IT.</span>
        </Link>
        <Navbar />

        {/* Login , wishlist , shoppingcart, modes*/}
        <div className="flex gap-4 justify-center items-center">
          <div className=' flex items-center w-64 relative'>
            <input
              type="text"
              placeholder="Search..."
              className={`absolute left-0  w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${searchQuery ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            />
            <div className='px-1 ml-auto cursor-pointer z-10'
              onClick={
                () => setSearchQuery(!searchQuery)
              }
            >
            <Search className="h-5 w-5  text-gray-600 cursor-pointer hover:text-gray-900 " />
            </div>
          </div>

          <div>
            <Link to="/wishlist" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
              <Heart className="h-5 w-5" />
            </Link>
          </div>

          <div >
            <Link to="/cart" className="flex items-center gap-2 text-gray-600 hover:text-red-600">
              <div className='relative'>
                <ShoppingBag className="h-5 w-5" />
                <label className="absolute -top-1 -right-2 text-xs text-white bg-gray-500 rounded-full px-1  ">{0}</label>
              </div>
            </Link>
          </div>
        <div>

            <div>
              {user ?
                (
                  <div className='relative flex flex-col items-center group cursor-pointer'>
                    <div className="flex items-center gap-2 text-gray-600 ">
                      <img src="https://i.etsystatic.com/26420914/r/il/af8374/3418668279/il_1080xN.3418668279_keap.jpg" alt="Profile" className="h-6 w-6 rounded-full" />
                    </div>
                    <div className='absolute left-0 top-6 hidden group-hover:block bg-gray-300 border rounded-md shadow-md w-32 z-20'>
                      <NavLink to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-600">Profile</NavLink>
                      <button onClick={() => setUser(null)} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-600">Logout</button>
                    </div>
                  </div>
                ) :
                (
                  <div className='relative flex flex-col items-center group cursor-pointer'>
                    <div className="flex items-center gap-2 text-gray-600 ">
                      <img src=" " alt="Profile" className="h-6 w-6 rounded-full" />
                    </div>
                    <div className='absolute left-0 top-6 hidden group-hover:block bg-gray-300 border rounded-md shadow-md w-32 z-20'>
                      <NavLink to="/login" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-red-600">Login</NavLink>
                    </div>
                  </div>
                )}
            </div>
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