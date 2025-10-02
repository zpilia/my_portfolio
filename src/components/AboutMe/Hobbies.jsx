import React, { useEffect, useState } from 'react';
import japanFlag from '../../assets/img/japan.svg';
import koreaFlag from '../../assets/img/korea.svg';

const Hobbies = () => {
    const word = "Lecture";
    const [isAnimating, setIsAnimating] = useState(true);
    const [slideIndex, setSlideIndex] = useState(0);

    const baseTranslations = [
        { text: "Culture Asiatique", flag: null },
        { text: "アジア文化", flag: japanFlag },
        { text: "아시아 문화", flag: koreaFlag },
    ];

    const translations = [...baseTranslations, ...baseTranslations];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => {
                if (prev >= baseTranslations.length) return 1;
                return prev + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [baseTranslations.length]);

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-6 sm:px-8 lg:px-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Centres
                </span>{" "}
                d'intérêts
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-8 text-center items-center sm:justify-between sm:gap-x-24 lg:gap-x-8 relative">

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 animate-dance-all">
                        Danse
                    </h1>
                </div>

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

                <div className="hidden lg:block h-16 border-l-2 border-gray-400 mx-4"></div>

                <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 sm:mt-4 lg:mt-0 sm:mx-auto h-12 overflow-hidden">
                    <div
                        className="transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateY(-${slideIndex * 3}rem)`,
                        }}
                    >
                        {translations.map((item, idx) => (
                            <div
                                key={idx}
                                className="h-12 flex items-center justify-center space-x-2"
                            >
                                <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                                    {item.text}
                                </h1>
                                {item.flag && (
                                    <img
                                        src={item.flag}
                                        alt=""
                                        className="w-10 h-10 object-contain mb-2"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hobbies;
