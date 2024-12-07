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
                        className="flex items-center justify-center w-12 h-12 bg-slate-200 text-gray-700 rounded-full shadow-md hover:bg-slate-400 hover:shadow-lg transition"
                    >
                        <FaAngleUp className="text-xl" />  
                    </button>
                </div>
            )}
        </>
    );
}
