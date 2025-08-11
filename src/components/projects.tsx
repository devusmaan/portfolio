"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        title: "Blog Aura",
        image: "blogaura.png",
        linkUrl: "https://blogaura-app.vercel.app",
    },
    {
        title: "Expense Tracker",
        image: "expense-tracker.png",
        linkUrl: "https://expense-tracker-localapp.vercel.app",
    },
    {
        title: "EasyCounter App",
        image: "easycounter.png",
        linkUrl: "https://easy-counter-app.vercel.app",
    },
];

export default function RecentProjects() {
    useEffect(() => {
        AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
    }, []);

    return (
        <section
            id="projects"
            className="bg-[#0a0a0a] py-10 lg:px-14 px-4"
        >
            <h2
                data-aos="fade-down"
                className="text-center text-3xl lg:text-4xl font-bold py-2 text-white relative"
            >
                PROJECTS
                <div className="flex items-center justify-center mt-2 mb-6">
                    <span className="h-0.5 bg-gray-500 w-16"></span>
                    <span className="h-1 bg-cyan-400 w-8 mx-1 shadow-[0_0_10px_#00FFFF]"></span>
                    <span className="h-0.5 bg-gray-500 w-16"></span>
                </div>
            </h2>

            <div className="container mx-auto px-4">
                <div
                    className="flex flex-col md:flex-row md:justify-between md:items-center mb-10"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
                    <Link
                        href="https://github.com/devusmaan?tab=repositories"
                        target="_blank"
                        className="mt-3 md:mt-0 text-blue-400 font-semibold hover:underline flex items-center"
                    >
                        View All <FiArrowRight className="ml-2" />
                    </Link>
                </div>

                <p
                    className="text-gray-300 text-lg mb-8"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Want to explore more projects? Click &quot;View All&quot; to check out
                    the full list on my GitHub repository.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                            className="relative group rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.7)]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="p-4 flex justify-between items-center bg-gray-900">
                                <h3 className="text-lg font-semibold text-white truncate">
                                    {project.title}
                                </h3>
                                <Link
                                    href={project.linkUrl}
                                    target="_blank"
                                    className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                >
                                    <FiArrowRight className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.8),
            0 0 20px rgba(59, 130, 246, 0.5);
        }
      `}</style>
        </section>
    );
}
