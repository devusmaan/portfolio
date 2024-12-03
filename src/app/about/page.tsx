

export default function About() {



    return (
        <div className="pt-7 px-4 md:px-20 lg:px-36">

            <h2 className="text-center text-3xl lg:text-4xl font-bold py-2 text-gray-900 relative">
                ABOUT
                <div className="flex items-center justify-center my-2">
                    <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                    <span className="h-1 bg-blue-600 w-8"></span>
                    <span className="h-0.5 mt-0.5 bg-gray-300 w-16"></span>
                </div>
            </h2>
            <p className="text-center py-3 px-4 md:px-8 lg:px-12 text-sm md:text-base lg:text-lg">
                I am a self-taught frontend developer with expertise in HTML5, CSS3, JavaScript, TypeScript, React.js, and Next.js. Passionate about creating responsive, user-friendly web applications, I excel at designing and cloning websites, building functionality-rich projects, and integrating Firebase to enhance performance.
            </p>


            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-6 lg:space-y-0 lg:space-x-10 mt-10">

                <img
                    className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full shadow-md"
                    src="me.png"
                    alt="Profile Picture"
                />


                <div className="lg:text-left">
                    <p className="font-bold text-3xl lg:text-4xl">FrontEnd Developer</p>
                    <div className="flex flex-col space-y-4 mt-4">
                        <p>
                            <span className="font-bold text-gray-700">Birthday:</span> 15 Sep, 2006
                        </p>
                        <p>
                            <span className="font-bold text-gray-700">Gmail:</span> devusmaan@gmail.com
                        </p>
                        <p>
                            <span className="font-bold text-gray-700">Phone:</span> +92 345 6003925
                        </p>
                    </div>
                </div>
            </div>


            <div className="bg-slate-300 mt-10 p-6 rounded-lg shadow-lg">

                <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
                    More About Me
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    <div className="space-y-6">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Birthday:</span>
                            <span className="text-gray-600">15 September, 2006</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Gmail:</span>
                            <span className="text-gray-600">devusmaan@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Phone:</span>
                            <span className="text-gray-600">03456003925</span>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">City:</span>
                            <span className="text-gray-600">Karachi, Pakistan</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Age:</span>
                            <span className="text-gray-600">18</span>
                        </div>
                        {/* <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Freelance:</span>
                            <span className="text-gray-600">Available</span>
                        </div> */}
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-32">Study:</span>
                            <span className="text-gray-600">Continued</span>
                        </div>
                    </div>
                </div>
            </div>





        </div>


    )
}