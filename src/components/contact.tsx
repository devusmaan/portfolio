
import Link from 'next/link';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';

export default function Contact() {


    return (

        <>
            <div id='contact' className="pt-12 bg-slate-200">
                <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                    CONTACT
                    <div className="flex items-center justify-center my-2">
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                        <span className="h-1 bg-blue-600 w-8"></span>
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                    </div>
                </h2>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h3 className="text-xl lg:text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
                        <p className="text-gray-600">Feel free to reach out for any inquiries, collaborations, or just to say hello!</p>
                    </div>
                    <div className="space-y-8">


                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-1">
                                <FaLocationDot className='text-2xl text-gray-700' />

                                <span className="text-gray-700">Karachi, Pakistan</span>
                            </div>
                            <div className="flex items-center">
                                <IoIosCall className='text-gray-700 text-2xl'  /> <span className="text-gray-700">
                                    +92-345-600-3925</span>
                            </div>
                            <div className="flex items-center">
                                <SiGmail className='text-gray-700' />

                                <span className=" text-gray-700 ml-2">devusmaan@gmail.com</span>
                            </div>
                        </div>


                        <div className="text-center mt-10">
                            <h4 className="sm:text-3xl text-2xl font-semibold text-gray-700">M Usman</h4>
                            <div className="flex justify-center gap-2">
                                <Link
                                    href="https://www.instagram.com/usmanliftss"
                                    target="_blank">
                                    <FaInstagramSquare className='text-gray-700 text-xl sm:text-2xl hover:text-blue-500 transition-colors' />

                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/devusmaan"
                                    target="_blank"
                                >
                                    <FaLinkedin className='text-gray-700 text-xl sm:text-2xl hover:text-blue-500 transition-colors' />

                                </Link>
                                <Link
                                    href="https://github.com/devusmaan"
                                    target="_blank">
                                    <FaGithub className="text-gray-700 text-xl sm:text-2xl hover:text-blue-500 transition-colors" />

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-800 text-white py-4 text-center mt-12">
                    <p className="text-sm">© {new Date().getFullYear()} M Usman. All Rights Reserved.</p>
                </div>
            </div>

        </>

    )
}