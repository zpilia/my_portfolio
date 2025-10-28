import React from 'react';
import englishFlag from '../../assets/img/england.svg';
import spanishFlag from '../../assets/img/spain.svg';
import texts from '../../data/texts.json';

const Languages = () => {
    const { title, levels } = texts.languages;

    const getFlag = (filename) => {
        if (filename === "england.svg") return englishFlag;
        if (filename === "spain.svg") return spanishFlag;
        return null;
    };

    return (
        <div className="p-6 sm:p-8 rounded-lg text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title.split(" ")[0]}
                </span>{" "}
                {title.split(" ").slice(1).join(" ")}
            </h1>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:space-x-12">
                {levels.map((lvl, idx) => (
                    <React.Fragment key={idx}>
                        <div className="flex flex-row items-center space-x-2">
                            <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                                {lvl.level}
                            </h1>
                            <img
                                src={getFlag(lvl.flag)}
                                alt={`Drapeau ${lvl.flag}`}
                                className="w-10 h-10 sm:w-14 sm:h-14"
                            />
                        </div>

                        {idx < levels.length - 1 && (
                            <div className="hidden sm:block h-14 border-l-2 border-gray-400 mx-6 sm:mx-10"></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Languages;
