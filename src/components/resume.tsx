"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Resume() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section
            id="resume"
            className="relative min-h-screen py-16 px-6 md:px-20 bg-[#0a0a0a] text-white overflow-hidden"
        >


            <motion.h2
                className="text-center text-3xl lg:text-4xl font-bold mb-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
            >
                RESUME
                <div className="flex items-center justify-center mt-2 mb-6">
                    <span className="h-0.5 bg-gray-500 w-16"></span>
                    <span className="h-1 bg-cyan-400 w-8 mx-1 shadow-[0_0_10px_#00FFFF]"></span>
                    <span className="h-0.5 bg-gray-500 w-16"></span>
                </div>
            </motion.h2>

            <div className="max-w-5xl mx-auto relative z-10 space-y-12">

                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-3xl font-bold text-center">Muhammad Usman Khan</h1>
                    <p className="text-sm mt-2 text-center text-gray-300">
                        +92-345-600-3925 · devusmaan@gmail.com ·{" "}
                        <Link
                            href="https://github.com/devusmaan"
                            target="_blank"
                            className="underline text-blue-400 hover:text-blue-500 transition duration-200"
                        >
                            GitHub
                        </Link>
                    </p>
                </motion.div>


                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
                    <p className="text-gray-300">
                        I am a passionate and self-taught <strong>MERN Stack Developer</strong>, dedicated to
                        building responsive, user-friendly web applications. With expertise in modern
                        technologies like <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
                        <strong>Firebase</strong>, I aim to deliver high-quality solutions for businesses. I am
                        currently honing my skills through <strong>Saylani Mass I.T Training</strong> and am
                        enthusiastic about pursuing innovative projects.
                    </p>
                </motion.div>


                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            "HTML",
                            "CSS",
                            "Bootstrap",
                            "JavaScript",
                            "React.js",
                            "Tailwind",
                            "TypeScript",
                            "Next.js",
                            "Firebase",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-gray-800 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-200"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>


                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Languages</h2>
                    <ul className="space-y-2 text-gray-300 text-center">
                        <li>Urdu: <span className="text-blue-400">Native</span></li>
                        <li>English: <span className="text-blue-400">Proficient</span></li>
                    </ul>
                </motion.div>


                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Certifications & Achievements</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>
                            <span className="font-bold">ICATS English Linguistics</span> - International Cats Contests (ICATS), <span className="italic">2020</span>
                        </li>
                    </ul>
                </motion.div>


                <motion.div
                    className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 text-center">Education</h2>
                    <ul className="space-y-4 text-gray-300">
                        <li>
                            <p className="font-bold">MATRICULATION (SSC)</p>
                            <p>Premier Grammar Secondary School</p>
                        </li>
                        <li>
                            <p className="font-bold">INTERMEDIATE (HSC)</p>
                            <p>Govt. ForMen College Nazimabad</p>
                        </li>
                        <li>
                            <p className="font-bold">MERN STACK DEVELOPMENT</p>
                            <p>Saylani Mass I.T Training (SMIT)</p>
                        </li>
                    </ul>
                </motion.div>


                <motion.div
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <p className="mb-4 text-lg font-medium text-gray-300">
                        To download the resume in PDF format, click the button below:
                    </p>
                    <a
                        download
                        href="/Usman-Resume.pdf"
                        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
