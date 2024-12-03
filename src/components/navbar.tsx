import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <div className="w-full md:w-1/6 lg:w-1/6 flex-col justify-center items-center py-4 lg:py-6 space-y-8 hidden md:flex">
            <nav className="flex flex-col gap-3 items-center p-5 fixed">

                {/* <Link href="/" className="mb-6 relative group flex">
                    <div className="flex items-center bg-blue-600 text-white rounded-full w-12 h-12 transition-all duration-500 overflow-hidden group-hover:w-32">
                        
                        <div className="absolute inset-0 flex items-center justify-center w-12 h-12">
                            <FontAwesomeIcon icon={faHome} className="text-xl" />
                        </div>
                       
                        <span className="opacity-0 ml-12 text-sm transition-opacity duration-500 group-hover:opacity-100">
                            Home
                        </span>
                    </div>
                </Link>

                <Link href={"/"}>
                    <div className="flex justify-center p-4 bg-blue-600 text-white rounded-full w-12 h-12 overflow-hidden group-hover:w-40 group-hover:overflow-auto">
                        <FontAwesomeIcon icon={faHome} className="text-xl mx-9 pl-10" /> <span>Home</span>
                    </div>
                </Link> */}

                <Link href="/" className="mb-6 relative group flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                        Home
                    </span>
                </Link>


                <Link href="/about" className="mb-6 relative group flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                        About
                    </span>
                </Link>

                
                <Link href="/resume" className="mb-6 relative group flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
                    <FontAwesomeIcon icon={faFile} />
                    </div>
                    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                        Resume
                    </span>
                </Link>

                


                <Link href="/portfolio" className="mb-6 relative group flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                        Portfolio
                    </span>
                </Link>


                <Link href="/contact" className="mb-6 relative group flex items-center justify-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg group-hover:bg-blue-700 transition duration-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <span className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                        Contact
                    </span>
                </Link>

            </nav>
        </div>

    );
}
