import React from 'react'
import { NavLink } from 'react-router-dom';
  

function NavbarMo() {
    const categories = [
    {name: 'All', link: '/' },
    { name: 'Women', link: '/women' },
    { name: 'Men', link: '/men' },
    { name: 'Kids', link: '/kids' },
  ];

  return (
    
         <nav className="flex justify-between items-center gap-6 py-4 px-4 md:hidden">
        {categories.map((category) => (
          <NavLink key={category.name} to={category.link} className="hover:text-red-600">
            {category.name}
          </NavLink>
        ))}
      </nav>
    
  )
}

export default NavbarMo