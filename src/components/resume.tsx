import Link from "next/link";


export default function Resume() {


    return (
        <div id="resume" className=" flex justify-center items-center">
            <div className="max-w-4xl w-full rounded-lg overflow-hidden min-h-screen py-10 lg:mx-20 md:px-16 ">
                <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                    RESUME
                    <div className="flex items-center justify-center my-2">
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                        <span className="h-1 bg-blue-600 w-8"></span>
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                    </div>
                </h2>

                <div className="mx-3 rounded-lg border-black bg-slate-200">
                    <div className="bg-gray-900 text-white py-6 px-8 rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold text-center">Muhammad Usman Khan</h1>
                        <p className="text-sm mt-2 text-center">
                            +92-345-600-3925 · devusmaan@gmail.com ·{" "}
                            <Link
                                href="https://github.com/devusmaan"
                                target="_blank"
                                className="underline text-blue-400 hover:text-blue-500 transition duration-200"
                            >
                                GitHub
                            </Link>
                        </p>
                    </div>

                    <div className="mt-6 p-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">About Me</h2>
                        <p className="text-gray-700">
                            I am a passionate and self-taught <strong>MERN Stack Developer</strong>, dedicated to
                            building responsive, user-friendly web applications. With expertise in modern
                            technologies like <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
                            <strong>Firebase</strong>, I aim to deliver high-quality solutions for businesses. I am
                            currently honing my skills through <strong>Saylani Mass I.T Training</strong> and am
                            enthusiastic about pursuing innovative projects.
                        </p>
                        <div className="flex items-center justify-center">

                            <span className="h-1 mt-6 bg-gray-500 w-8/12"></span>
                        </div>
                    </div>

                    <div className="mt-6 p-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Skills</h2>
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
                                    className="bg-gray-200 text-gray-700 font-semibold text-sm px-4 py-2 rounded-full shadow-md hover:bg-gray-300 transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-center">

                            <span className="h-1 mt-6 bg-gray-500 w-8/12"></span>
                        </div>

                    </div>

                    <div className="mt-6 p-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Languages</h2>
                        <ul className="space-y-2">
                            <li className="flex justify-center">
                                <span className="font-bold text-gray-700 w-24">Urdu:</span>
                                <span className="text-gray-600">Native</span>
                            </li>
                            <li className="flex justify-center">
                                <span className="font-bold text-gray-700 w-24">English:</span>
                                <span className="text-gray-600">Proficient</span>
                            </li>
                        </ul>

                        <div className="flex items-center justify-center">

                            <span className="h-1 mt-6 bg-gray-500 w-8/12"></span>
                        </div>
                    </div>

                    <div className="mt-6 p-4">
                        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
                            Certifications & Achievements
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <span className="font-bold">ICATS English Linguistics</span> - International Cats
                                Contests (ICATS), <span className="italic">2020</span>
                            </li>
                        </ul>

                        <div className="flex items-center justify-center">

                            <span className="h-1 mt-6 bg-gray-500 w-8/12"></span>
                        </div>
                    </div>

                    <div className="mt-6 p-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Education</h2>
                        <ul className="space-y-4">
                            <li>
                                <p className="font-bold text-gray-800">MATRICULATION (SSC)</p>
                                <p className="text-gray-600">Premier Grammar Secondary School</p>
                            </li>
                            <li>
                                <p className="font-bold text-gray-800">INTERMEDIATE (HSC)</p>
                                <p className="text-gray-600">Govt. ForMen College Nazimabad</p>
                            </li>
                            <li>
                                <p className="font-bold text-gray-800">MERN STACK DEVELOPMENT</p>
                                <p className="text-gray-600">Saylani Mass I.T Training (SMIT)</p>
                            </li>
                        </ul>


                    </div>
                </div>
                <div className="text-center mt-6">
                    <p className="mb-4 text-lg font-medium">To download the resume in PDF format, click the button below:</p>
                    <a
                        download
                        href="/Usman-Resume.pdf"
                        className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                        Download Resume
                    </a>
                </div>

            </div>
        </div>

    )
}