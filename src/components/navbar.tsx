"use client"
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

            <div className="md:hidden fixed top-7 left-6 z-50">
                <button
                    onClick={toggleMenu}
                    className={`flex items-center justify-center w-12 h-12 
                bg-blue-600 text-white rounded-full shadow-lg
                hover:bg-blue-700 transition-all duration-300
                hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] 
                ${menuOpen ? "shadow-[0_0_20px_5px_rgba(59,130,246,0.8)]" : ""}`}
                >
                    {menuOpen ? (
                        <MdClose className="text-3xl transition-transform duration-300 transform hover:scale-110" />
                    ) : (
                        <GiHamburgerMenu className="text-3xl transition-transform duration-300 transform hover:scale-110" />
                    )}
                </button>
            </div>

            <div
                className={`fixed w-full pt-14 h-screen z-40 flex flex-col items-start justify-center
    transform transition-all duration-700 ease-in-out
    ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
    md:translate-y-0 md:opacity-100 md:fixed md:h-auto md:mt-7
    ml-6 md:w-1/6 lg:my-5 2xl:my-36`}
            >
                <nav className="flex flex-col items-center md:p-5">
                    {[
                        { href: "/", icon: <FaHome className="text-xl" />, label: "Home" },
                        { href: "#about", icon: <IoMdContact className="text-2xl" />, label: "About" },
                        { href: "#skills", icon: <SiSkillshare className="text-3xl" />, label: "Skills" },
                        { href: "#resume", icon: <FaFile />, label: "Resume" },
                        { href: "#projects", icon: <MdWorkOutline className="text-xl" />, label: "Projects" },
                        { href: "#contact", icon: <MdContactMail className="text-xl" />, label: "Contact" }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="mb-6 relative group flex items-center justify-center"
                        >
                            <div
                                className="w-12 h-12 lg:h-14 lg:w-14 flex items-center justify-center 
                     bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300
                     hover:bg-blue-700 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.8)]
                     transform hover:scale-110"
                            >
                                {item.icon}
                            </div>
                            <span
                                className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 
                     text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 
                     transition-all duration-300 shadow-lg"
                            >
                                {item.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>


        </>


    )
}