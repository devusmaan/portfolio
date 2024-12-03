import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {


    return (

        <>
            <div className="pt-24 bg-slate-200">
                <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                    CONTACT ME
                    <div className="flex items-center justify-center my-4">
                        <span className="h-1 bg-gray-300 w-24"></span>
                        <span className="h-1 bg-blue-600 w-12"></span>
                        <span className="h-1 bg-gray-300 w-24"></span>
                    </div>
                </h2>
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">Get in Touch</h3>
                        <p className="text-xl text-gray-600">Feel free to reach out for any inquiries, collaborations, or just to say hello!</p>
                    </div>
                    <div className="space-y-8">


                        <div className="flex flex-col items-center space-y-6">
                            <div className="flex items-center space-x-6">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
                                <span className="text-lg text-gray-700">Karachi, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-6">
                                <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600 text-2xl" />
                                <span className="text-lg text-gray-700">+92-345-600-3925</span>
                            </div>
                            <div className="flex items-center space-x-6">
                                <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl" />
                                <span className="text-lg text-gray-700">devusmaan@gmail.com</span>
                            </div>
                        </div>


                        <div className="text-center mt-10">
                            <h4 className="text-4xl font-semibold text-gray-700">M Usman</h4>
                            <div className="flex justify-center gap-3 mt-2">
                                <Link
                                    href="https://www.instagram.com/usmanliftss"
                                    target="_blank"
                                    className="text-gray-700 hover:text-blue-500 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/devusmaan"
                                    target="_blank"
                                    className="text-gray-700 hover:text-blue-500 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                                </Link>
                                <Link
                                    href="https://github.com/devusmaan"
                                    target="_blank"
                                    className="text-gray-700 hover:text-blue-500 transition-colors"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="text-2xl" />
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