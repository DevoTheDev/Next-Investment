import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'

const Navigation = () => {
  return (
        <div className="flex justify-between px-[2rem] py-3 gap-20 text-customCream
        bg-gray-800 font-bold items-center w-full
        ">
          <div className="flex w-full md:justify-end justify-center">
           <NavLinks
            classes={{
              container: `flex gap-12 h-max`,
              link: `flex px-6 py-2 
              text-white
              md:hover:text-customCyan rounded-lg`,
              activeLink: `
              md:text-customCyan
              md:bg-gray-900
              md:border-b
              border-b
              border-customCyan
              `,
            }}
           />
             </div>
        </div>
  )
}

export default Navigation