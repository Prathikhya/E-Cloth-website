import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Navbar = () => {

  const categories = [
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Kids', link: '/kids' },
  ];


  
  return (

      <div className="hidden md:flex items-center gap-6">
        {categories.map((category) => ( 
          <Link key={category.name} to={category.link} className="hover:text-red-600">
            {category.name}
          </Link>
        ))}

      </div>
  )
}

export default Navbar;