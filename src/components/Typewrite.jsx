"use client"

import React from 'react'
import { useEffect, useState } from 'react';

export default function TypeWrite() {

    const texts = ["Front End Developer", "Next js + Remix js", "Full Stack Developer", "Backend Developer"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 10000); // Change text every 4 seconds (including typing animation duration)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex">
            <div>
                <h1
                    className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-[#1E40AF] mr-5 text-3xl text-pink-500"
                // style={{ width: '100%' }}
                >
                    {texts[currentTextIndex]}
                </h1>
            </div>
        </div>
    )
}
