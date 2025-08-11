"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Portfolio() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {

        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    const floatingIcons = [
        {
            Icon: <SiNextdotjs size={40} color="#ffffff" />,
            glow: "drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
        },
        {
            Icon: <SiJavascript size={40} color="#f7df1e" />,
            glow: "drop-shadow(0 0 10px rgba(247,223,30,0.8)) drop-shadow(0 0 20px rgba(247,223,30,0.6))",
        },
        {
            Icon: <SiTailwindcss size={40} color="#38bdf8" />,
            glow: "drop-shadow(0 0 10px rgba(56,189,248,0.8)) drop-shadow(0 0 20px rgba(56,189,248,0.6))",
        },
        {
            Icon: <SiTypescript size={40} color="#3178c6" />,
            glow: "drop-shadow(0 0 10px rgba(49,120,198,0.8)) drop-shadow(0 0 20px rgba(49,120,198,0.6))",
        },
    ];

    return (
        <div className="relative flex min-h-screen bg-[#0a0a0a] text-gray-200 overflow-hidden">

            {Array.from({ length: 12 }).map((_, i) => {
                const { Icon, glow } = floatingIcons[i % floatingIcons.length];
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{
                            y: [Math.random() * 100, Math.random() * -100],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: glow,
                            opacity: 0.2,
                        }}
                    >
                        {Icon}
                    </motion.div>
                );
            })}


            <Navbar />


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full flex flex-col items-center justify-center px-6 text-center z-10"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
                >
                    Muhammad Usman
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-2xl font-medium text-gray-400"
                >
                    <TypeAnimation
                        sequence={[
                            "I'm a Frontend Developer", 2000,
                            "I build Modern Web Apps", 2000,
                            "I create Interactive UI", 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex space-x-6 text-3xl mt-6"
                >
                    {[
                        // { icon: <FaFacebook />, href: "#" },
                        { icon: <FaInstagram />, href: "https://instagram.com/in/usmanliftss" },
                        { icon: <FaLinkedin />, href: "https://linkedin.com/in/devusmaan" },
                        { icon: <FaGithub />, href: "https://github.com/devusmaan" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link href={item.href} target="_blank" className="hover:text-cyan-400 transition">
                                {item.icon}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
