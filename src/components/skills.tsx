

export default function Skills() {



    return (
        <>

            <div id="skills" className="p-6 md:mx-32 bg-white rounded-lg shadow-sm mt-6">
                <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                    SKILLS
                    <div className="flex items-center justify-center my-2">
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                        <span className="h-1 bg-blue-600 w-8"></span>
                        <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                    </div>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {[
                        { name: "HTML", level: 90 },
                        { name: "CSS", level: 75 },
                        { name: "JavaScript", level: 85 },
                        { name: "React.js", level: 80 },
                        { name: "Next.js", level: 78 },
                        { name: "TypeScript", level: 70 },
                        { name: "Tailwind CSS", level: 80 },
                        { name: "Firebase", level: 78 }
                    ].map((skill) => (
                        <div key={skill.name} className="flex flex-col space-y-2">

                            <div className="flex justify-between items-center">
                                <span className="text-lg text-gray-700 font-semibold">
                                    {skill.name}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">
                                    {skill.level}%
                                </span>
                            </div>

                            <div className="w-full bg-gray-300 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>





        </>
    )
}