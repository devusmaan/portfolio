"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
    return (
        <>
            <div
                id='contact'
                className="pt-12 bg-[#0a0a0a] text-white"
            >

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl lg:text-4xl font-bold py-2 relative"
                >
                    CONTACT
                    <div className="flex items-center justify-center mt-2 mb-6">
                        <span className="h-0.5 bg-gray-500 w-16"></span>
                        <span className="h-1 bg-cyan-400 w-8 mx-1 shadow-[0_0_10px_#00FFFF]"></span>
                        <span className="h-0.5 bg-gray-500 w-16"></span>
                    </div>
                </motion.h2>


                <div className="max-w-5xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h3 className="text-xl lg:text-3xl font-semibold mb-4 text-white">
                            Get in Touch
                        </h3>
                        <p className="text-gray-400">
                            Feel free to reach out for any inquiries, collaborations, or just to say hello!
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
                                <FaLocationDot className='text-2xl text-blue-400 drop-shadow-[0_0_8px_#3b82f6]' />
                                <span className="text-gray-300">Karachi, Pakistan</span>
                            </div>
                            <div className="flex items-center hover:scale-105 transition-transform duration-300">
                                <IoIosCall className='text-blue-400 text-2xl drop-shadow-[0_0_8px_#3b82f6]' />
                                <span className="text-gray-300 ml-1">+92-345-600-3925</span>
                            </div>
                            <div className="flex items-center hover:scale-105 transition-transform duration-300">
                                <SiGmail className='text-blue-400 drop-shadow-[0_0_8px_#3b82f6]' />
                                <span className="text-gray-300 ml-2">devusmaan@gmail.com</span>
                            </div>
                        </div>


                        <div className="text-center mt-10">
                            <h4 className="sm:text-3xl text-2xl font-semibold text-white">M Usman</h4>
                            <div className="flex justify-center gap-4 mt-4">
                                <Link href="https://www.instagram.com/ig_usmanio" target="_blank">
                                    <FaInstagramSquare className='text-gray-400 text-2xl sm:text-3xl hover:text-pink-500 hover:scale-125 transition duration-300 drop-shadow-[0_0_8px_#ec4899]' />
                                </Link>
                                <Link href="https://www.linkedin.com/in/devusmaan" target="_blank">
                                    <FaLinkedin className='text-gray-400 text-2xl sm:text-3xl hover:text-blue-500 hover:scale-125 transition duration-300 drop-shadow-[0_0_8px_#3b82f6]' />
                                </Link>
                                <Link href="https://github.com/devusmaan" target="_blank">
                                    <FaGithub className="text-gray-400 text-2xl sm:text-3xl hover:text-white hover:scale-125 transition duration-300 drop-shadow-[0_0_8px_#fff]" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="bg-gray-900 text-gray-400 py-4 text-center mt-12">
                    <p className="text-sm">© {new Date().getFullYear()} M Usman. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
}
