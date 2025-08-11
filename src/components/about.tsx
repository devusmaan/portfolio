"use client";

import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FaReact, FaHtml5, FaJs, FaNodeJs, FaCss3Alt } from "react-icons/fa";

export default function About() {

    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     // Ensure animations start only after mount
    //     setIsMounted(true);
    // }, []);

    // if (!isMounted) {
    //     return null; // Prevents hydration mismatch
    // }
    return (
        <section id="about" className="relative bg-[#0a0a0a] text-gray-200 py-20 px-6 sm:px-12 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center text-3xl lg:text-4xl font-bold text-white text-transparent"
            >
                ABOUT ME
            </motion.h2>

            <div className="flex items-center justify-center mt-2 mb-6">
                <span className="h-0.5 bg-gray-500 w-16"></span>
                <span className="h-1 bg-cyan-400 w-8 mx-1 shadow-[0_0_10px_#00FFFF]"></span>
                <span className="h-0.5 bg-gray-500 w-16"></span>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
                <motion.img
                    src="me.png"
                    alt="Profile"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-cover rounded-full shadow-lg shadow-cyan-500/30 border-4 border-[#1a1a1a]"
                />

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-center lg:text-left space-y-4"
                >
                    <p className="text-lg text-gray-400 leading-relaxed">
                        I’m a frontend developer skilled in{" "}
                        <span className="text-cyan-400 font-semibold">HTML5, CSS3, JavaScript, TypeScript, React.js, and Next.js</span>.
                        I specialize in building responsive, high-performance web apps with interactive UI.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6 justify-center lg:justify-start">
                        <p><span className="font-semibold text-gray-400">📧 Email:</span> devusmaan@gmail.com</p>
                        <p><span className="font-semibold text-gray-400">📱 Phone:</span> +92 345 6003925</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-[#1a1a1a]/70 backdrop-blur-md shadow-lg shadow-cyan-500/10"
            >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                    More About Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
                    <div>
                        <p><span className="font-semibold text-gray-400">City:</span> Karachi, Pakistan</p>
                        <p><span className="font-semibold text-gray-400">Study:</span> Continued</p>
                    </div>
                    <div>
                        <p><span className="font-semibold text-gray-400">Gmail:</span> devusmaan@gmail.com</p>
                        <p><span className="font-semibold text-gray-400">Phone:</span> 0345 6003925</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
