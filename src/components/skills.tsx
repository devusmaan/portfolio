    import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
    import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase } from "react-icons/si";

    export default function Skills() {
        const skills = [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500 drop-shadow-[0_0_8px_#FFA500]" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500 drop-shadow-[0_0_8px_#00BFFF]" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400 drop-shadow-[0_0_8px_#FFD700]" /> },
            { name: "React.js", icon: <FaReact className="text-cyan-400 drop-shadow-[0_0_8px_#00FFFF]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white drop-shadow-[0_0_8px_#CCCCCC]" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400 drop-shadow-[0_0_8px_#1E90FF]" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 drop-shadow-[0_0_8px_#20B2AA]" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500 drop-shadow-[0_0_8px_#FFD54F]" /> },
        ];

        return (
            <section
        id="skills"
        className="relative py-20 px-6 md:px-20 bg-[#0a0a0a] text-gray-200 overflow-hidden"
        >
            
                <div className="absolute inset-0 animate-pulse"></div>

                <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12 relative z-10">
                    SKILLS
                    <div className="flex items-center justify-center mt-2 mb-6">
                        <span className="h-0.5 bg-gray-500 w-16"></span>
                        <span className="h-1 bg-cyan-400 w-8 mx-1 shadow-[0_0_10px_#00FFFF]"></span>
                        <span className="h-0.5 bg-gray-500 w-16"></span>
                    </div>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 relative z-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-center space-y-3 p-6 bg-white/5 rounded-xl backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                        >
                            <div className="text-5xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                                {skill.icon}
                            </div>
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
    

