import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const projects = [
    {
        title: "Blog Aura",
        image: "blogaura.png",
        linkUrl: "https://blogaura-app.vercel.app"
    },
    {
        title: "Expense Tracker",
        image: "expense-tracker.png",
        linkUrl: "https://expense-tracker-localapp.vercel.app"

    },
    {
        title: "EasyCounter App",
        image: "easycounter.png",
        linkUrl: "https://easy-counter-app.vercel.app"

    },
];

export default function RecentProjects() {
    return (
        <section id="projects" className="my-10">
            <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                PROJECTS
                <div className="flex items-center justify-center my-2">
                    <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                    <span className="h-1 bg-blue-600 w-8"></span>
                    <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                </div>
            </h2>
            <div className="container mx-auto px-4 lg:mx-5">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Projects</h2>
                        <Link
                            href="https://github.com/devusmaan?tab=repositories"
                            target="_blank"
                            className="text-orange-500 font-semibold hover:underline flex items-center"
                        >
                            View All <FiArrowRight className="ml-2" />
                        </Link>
                    </div>

                    
                    <p className="text-gray-600 text-lg mb-8">
                        Want to explore more projects? Click &quot;View All&quot; to check out the full list on our GitHub repository.
                    </p>
                </div>



                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:mx-14">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg w-72 sm:w-[280px] md:w-[240px] lg:w-[280px] mx-auto"
                        >

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                            />


                            <div className="p-4 flex justify-between items-center bg-white shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-900 truncate">
                                    {project.title}
                                </h3>
                                <Link
                                    href={`${project.linkUrl}`}
                                    target="_blank"
                                    className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition">
                                    <FiArrowRight className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
