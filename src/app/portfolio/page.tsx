
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
    return (
        <div className="flex min-h-screen" style={{
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
                className="w-full lg:w-5/6 flex sm:flex max-sm:items-center max-md:items-center flex-col justify-center bg-cover bg-center space-y-4 lg:space-y-6 px-4 lg:px-6"
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
                    className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-medium">
                    I&apos;m a Frontend Developer
                </h3>


                <div className="flex space-x-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    <Link
                        href="#"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link
                        href="https://instagram.com/in/usmanliftss"
                        target="_blank"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/devusmaan"
                        target="_blank"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link
                        href="https://github.com/devusmaan"
                        target="_blank"
                        className="text-gray-300 hover:text-blue-400 transition duration-300"
                        style={{
                            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
