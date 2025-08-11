"use client"

import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <div className="fixed bottom-20 right-6 z-50">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-12 h-12 
                   bg-gradient-to-br from-blue-500 to-blue-700 
                   text-white rounded-full shadow-lg 
                   transition-all duration-300 
                   hover:scale-110 
                   hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] 
                   animate-pulse"
                    >
                        <FaAngleUp className="text-2xl" />
                    </button>
                </div>

            )}
        </>
    );
}
