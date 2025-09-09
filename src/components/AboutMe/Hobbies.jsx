import React, { useState, useEffect } from 'react';

const Hobbies = () => {
    const word = "Lecture";
    const [isAnimating, setIsAnimating] = useState(true);
    const totalAnimationDuration = word.length * 0.6 * 1000 + 3000;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setIsAnimating(true);
            }, 1000);
        }, totalAnimationDuration);

        return () => clearTimeout(timer);
    }, [isAnimating, totalAnimationDuration]);

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-6 sm:px-8 lg:px-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Centres
                </span> d'intérêts
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-8 text-center items-center sm:justify-between sm:gap-x-24 lg:gap-x-8 relative">

                {/* Danse */}
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 animate-dance-all">
                        Danse
                    </h1>
                </div>

                {/* Séparateur vertical (Desktop uniquement) */}
                <div className="hidden lg:block h-16 border-l-2 border-gray-400 mx-4"></div>

                {/* Lecture */}
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 inline-flex">
                        {word.split("").map((letter, index) => (
                            <span
                                key={index}
                                className={`inline-block ${isAnimating ? 'animate-page-flip' : ''}`}
                                style={{ animationDelay: `${index * 0.6}s` }}
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Séparateur vertical */}
                <div className="hidden lg:block h-16 border-l-2 border-gray-400 mx-4"></div>

                {/* Culture Asiatique */}
                <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 sm:mt-4 lg:mt-0 sm:mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Culture Asiatique
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
