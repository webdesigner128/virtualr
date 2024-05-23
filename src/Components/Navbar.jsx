import React from 'react';
import logo from "../Assests/logo.png";
import { navItems } from "../constants/index.jsx";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavBar = () => {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 ">
            <img className="h-10 w-10 mr-2" src={logo} alt="site-logo" />
            <span className="text-xl tracking-tight text-white"> VirtualR</span>
          </div>
          <ul className=" hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => {
              return (<li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>)
            })
            }
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign in
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
              Create An Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {isClicked ? <X /> : <Menu />}
            </button>
          </div>
          </div>
          
          {isClicked &&
            (
              <div className="lg:hidden  fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center ">
                <ul>
                  {navItems.map((items, index) => {
                    return (<li key={index} className="py-4">
                      <a href={items.href}>{items.label}</a>
                    </li>)
                  })
                  }
                </ul>
                <div className="flex space-x-6">
                  <a href="#" className="py-2 px-2 border rounded-mid">
                    Sign In
                  </a>
                  <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md">
                    Create An Account
                  </a>
                </div>
              </div>
            )
          }
        
      </div>
    </nav>
  )
};
