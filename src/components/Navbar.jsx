import logo from "../assets/logo.png";
import {navItems} from  "../Constants";
import {Menu, X} from "lucide-react";
import { useState } from "react";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleNavbar = () => {
        setToggleMenu(!toggleMenu);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
       <div className="container px-4 mx-auto reletive text-sm">
          <div className="flex justify-between items-center">
             <div className="flex items-center flex-shrink-0">
                 <img className="h-10 w-10 mr-2" src={logo} alt="logo"/>
                 <span className="text-xl tracking-tight">My Blog</span>
             </div>
             <ul className="hidden lg:flex ml-14 space-x-12">
                 {navItems.map((item, index) =>(
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                 ))}
             </ul>
             <div className="hidden lg:flex justify-center space-x-12 items-center">
                 <a href="#" className="py-2 px-3 border rounded-md">
                      Sign In
                 </a>
                 <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Create an Account
                 </a>
             </div>
             <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar} className="flex items-center justify-center w-10 ">
                    {toggleMenu ? <X /> : <Menu />}
                </button>
             </div>
          </div>
          {toggleMenu && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                    {navItems.map((item, index) =>(
                        <li key={index} className="py-4">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-6">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                        Create an Account
                    </a>
                </div>
                </div>
          )}
       </div>
    </nav>  
  )
}

export default Navbar