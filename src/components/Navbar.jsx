import React from "react";
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full z-10">
            <div>
                <img src={assets.logo} alt="" />
                <ul>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Recensions</a>

                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
            </div>
        </div>
    )
}

export default Navbar;