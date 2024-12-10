"use client"
import Link from "next/link";
import { useState } from "react";
import { FaFile, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { MdClose, MdContactMail, MdWorkOutline } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";




export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>


            <div className="md:hidden fixed top-7 left-6 z-50" >
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-12 h-12 bg-slate-200 text-gray-700 rounded-full shadow-md hover:bg-slate-400 hover:shadow-lg transition"
                >
                    {menuOpen ? <MdClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
                </button>
            </div>

            
                < div
                    className={`fixed w-full pt-16 h-screen z-40 flex flex-col items-start justify-center transform transition-transform duration-700 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"
                        } md:translate-y-0 md:fixed md:h-auto md:mt-7 ml-6 md:w-1/6`
                    }
                >
                    <nav className="flex flex-col items-center md:p-5">
                        <Link href="/" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <FaHome className="text-xl" />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                Home
                            </span>
                        </Link>

                        <a href="#about" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <IoMdContact className="text-2xl" />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                About
                            </span>
                        </a>

                        <a href="#skills" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <SiSkillshare className="text-3xl" />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                Skills
                            </span>
                        </a>

                        <a href="#resume" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <FaFile />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                Resume
                            </span>
                        </a>

                        <a href="#projects" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <MdWorkOutline className="text-xl" />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                Projects
                            </span>
                        </a>


                        <a href="#contact" className="mb-6 relative group flex items-center justify-center">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition">
                                <MdContactMail className="text-xl" />
                            </div>
                            <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition shadow-lg">
                                Contact
                            </span>
                        </a>

                    </nav>
                </div >
         
        </>


    )
}