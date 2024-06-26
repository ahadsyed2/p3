import Link from "next/link"
import React from 'react'
import NavLink from "./NavLink"

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path:  "#"
    },


]

const Navbar = () => {
    return(
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">

                <Link href ={"/"} className="text 2xl md:text-5xl text-white font-semibold"> 
                LOO 
                </Link>
                <div className="menu hidden md:block md:w-auto" id="navbar" >
                <ul className="flex p-4 md:flex-row md:space-x-8 ">
                        {

                           navLinks.map((link,index) => (
                            <li key={index}>
                              <NavLink href={link.path} title={link.title}/>  
                            </li>
                           ))}
                    
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;