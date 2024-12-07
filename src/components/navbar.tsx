"use client"
import Link from "next/link";
import { useState } from "react";
import { FaFile, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { MdClose, MdContactMail } from "react-icons/md";
import { SiSkillshare } from "react-icons/si";




export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>


            < div className="md:hidden fixed top-7 left-6 z-50" >
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-12 h-12 bg-slate-200 text-gray-700 rounded-full shadow-md hover:bg-slate-400 hover:shadow-lg transition"
                >
                    {menuOpen ? <MdClose className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
                </button>
            </div >


            < div
                className={`fixed w-full pt-6 h-screen z-40 flex flex-col items-start justify-center transform transition-transform ${menuOpen ? "translate-y-0" : "-translate-y-full"
                    } md:translate-y-0 md:relative md:h-auto ml-6 md:w-1/6`
                }
            >
                <nav className="flex flex-col gap-3 items-center md:fixed md:p-5">
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
                        <SiSkillshare className="text-3xl"/>
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

















        // <>
        //     <div className="md:hidden fixed top-4 left-4 z-50">
        //         <button
        //             className="flex items-center justify-center w-12 h-12 text-white rounded-full hover:bg-black hover:shadow-lg transition"
        //         >
        //             <GiHamburgerMenu className="text-2xl" />
        //         </button>
        //     </div>

        //     <div className="w-full md:w-1/6 lg:w-1/6 flex-col justify-center items-center py-4 lg:py-6 space-y-8 hidden md:flex">
        //         <nav className="flex flex-col gap-3 items-center p-5 fixed">



        //             <Link href="/" className="mb-6 relative group flex items-center justify-center">
        //                 <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
        //                     <FaHome className="text-xl" />
        //                 </div>
        //                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
        //                     Home
        //                 </span>
        //             </Link>


        //             <Link href="/about" className="mb-6 relative group flex items-center justify-center">
        //                 <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
        //                     <IoMdContact className='text-2xl' />
        //                 </div>
        //                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
        //                     About
        //                 </span>
        //             </Link>


        //             <Link href="/resume" className="mb-6 relative group flex items-center justify-center">
        //                 <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
        //                     <FaFile />
        //                 </div>
        //                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
        //                     Resume
        //                 </span>
        //             </Link>




        //             <a href="#skills" className="mb-6 relative group flex items-center justify-center">
        //                 <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
        //                     {/* <FontAwesomeIcon icon={faBriefcase} /> */}
        //                 </div>
        //                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
        //                     Portfolio
        //                 </span>
        //             </a>


        //             <a href="#contact" className="mb-6 relative group flex items-center justify-center">
        //                 <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
        //                     <MdContactMail className='text-xl' />
        //                 </div>
        //                 <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
        //                     Contact
        //                 </span>
        //             </a>

        //         </nav >
        //     </div >
        // </>

    );
}














{/* <Link href="/" className="mb-6 relative group flex">
                        <div className="flex items-center bg-blue-600 text-white rounded-full w-12 h-12 transition-all duration-500 overflow-hidden group-hover:w-32">
                            
                            <div className="absolute inset-0 flex items-center justify-center w-12 h-12">
                                <FontAwesomeIcon icon={faHome} className="text-xl" /> 
                            </div>
                        
                            <span className="opacity-0 ml-12 text-sm transition-opacity duration-500 group-hover:opacity-100">
                                Home
                            </span>
                        </div >
                    </Link >  */}

{/* <Link href={"/"}>
                        <div className="flex justify-center p-4 bg-blue-600 text-white rounded-full w-12 h-12 overflow-hidden group-hover:w-40 group-hover:overflow-auto">
                            <FontAwesomeIcon icon={faHome} className="text-xl mx-9 pl-10" /> <span>Home</span>
                        </div>
                    </Link>  */}