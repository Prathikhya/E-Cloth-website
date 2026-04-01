import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


function NavbarMo() {
    const categories = [
    {name: 'All', link: '/' },
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Kids', link: '/kids' },
  ];

  return (
    
         <div className="flex justify-evenly items-center gap-6 py-4 px-4 md:hidden">
        {categories.map((category) => (
          <Link key={category.name} to={category.link} className="hover:text-red-600">
            {category.name}
          </Link>
        ))}
      </div>
    
  )
}

export default NavbarMo