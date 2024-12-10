

import Link from "next/link";
import Navbar from "@/components/navbar";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Portfolio() {
    return (
        <div className="flex min-h-screen"
            style={{
                backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
            ), url('/bgimage.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>


            <Navbar />



            <div
                className="w-full lg:w-5/6 flex sm:flex max-sm:items-center max-md:items-center flex-col justify-center md:mx-36 bg-cover bg-center space-y-4 lg:space-y-6"
            >

                <h1 style={{
                    color: "#FFFFFF",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
                    className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
                    Muhammad Usman
                </h1>

                <h3
                    style={{
                        color: "#DCE4FF",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                    }}
                    className="text-lg sm:text-2xl md:text-2xl lg:text-2xl font-medium">
                    I&apos;m a Frontend Developer
                </h3>


                <div
                    className="flex space-x-6 text-2xl sm:text-2xl md:text-2xl lg:text-3xl"
                >
                    <Link
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FaFacebook className="text-gray-300 hover:text-blue-400 transition duration-300" />


                    </Link>
                    <Link
                        href="https://instagram.com/in/usmanliftss"
                        target="_blank"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FaInstagram className="text-gray-300 hover:text-blue-400 transition duration-300" />

                    </Link>
                    <Link
                        href="https://linkedin.com/in/devusmaan"
                        target="_blank"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FaLinkedin className="text-gray-300 hover:text-blue-400 transition duration-300" />
                    </Link>
                    <Link
                        href="https://github.com/devusmaan"
                        target="_blank"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FaGithub className="text-gray-300 hover:text-blue-400 transition duration-300"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
