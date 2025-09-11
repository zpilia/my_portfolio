import React from 'react';
import textData from '../../data/texts.json';

const TextReveal = () => {
    const text = textData.textReveal;
    const words = text.split(" ");

    return (
        <div className="mx-auto bg-opacity-15 px-6 py-4 rounded-lg w-fit">
            <h1 className="overflow-hidden text-2xl md:text-4xl font-bold leading-snug text-white text-center">
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="whitespace-nowrap inline-block mr-1">
                        {word.split("").map((char, charIndex) => (
                            <span
                                key={`${wordIndex}-${charIndex}`}
                                className="inline-block animate-text-reveal [animation-fill-mode:backwards]"
                                style={{ animationDelay: `${(wordIndex * 4 + charIndex) * 0.05}s` }}
                            >
                                {char}
                            </span>
                        ))}
                        {'\u00A0'}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TextReveal;
