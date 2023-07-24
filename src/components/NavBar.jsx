import React from 'react';
import { useState } from 'react';
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets"

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img 
        src={logo} 
        alt="guitarworld logo" 
        className="w-[140px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => {
          return (
            <li
              key={item.id}
              className={`cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >{item.title}
            </li>
          )
        })}
      </ul>

      {/* responsive sidebar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        src={toggle ? close : menu } 
        alt="menu"
        onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={item.id}
                  className={`cursor-pointer m-3 text-slate-700`}
                >{item.title}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar