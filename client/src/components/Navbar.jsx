import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = () => {

  const categories = [
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Kids', link: '/kids' },
    
  ];


  
  return (

      <nav className="hidden md:flex items-center gap-6">
        {categories.map((category) => ( 
          <NavLink key={category.name} to={category.link} className="hover:text-red-600 ">
            {category.name}
          </NavLink>
        ))}

      </nav>
  )
}

export default Navbar;