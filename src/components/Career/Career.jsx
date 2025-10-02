import React from 'react';
import texts from '../../data/texts.json';

const Career = () => {
    const { title, events } = texts.career;

    return (
        <section id="career" className="min-h-screen flex flex-col items-center px-4 md:px-8 xl:px-24 py-16 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                {title.split(" ")[0]}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title.split(" ").slice(1).join(" ")}
                </span>
            </h1>

            <div className="flex flex-col xl:flex-row xl:items-center justify-center w-full max-w-5xl space-y-8 xl:space-y-0 xl:space-x-4">
                {events.map((event, index) => (
                    <React.Fragment key={index}>
                        <div className="flex flex-col items-center text-center space-y-2 relative">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>

                            <div
                                className={`p-4 rounded-lg shadow-md w-60 md:w-72 ${
                                    event.current
                                        ? "bg-blue-500 bg-opacity-40 text-white border-2 border-blue-300"
                                        : "bg-gray-800 bg-opacity-80 text-white"
                                }`}
                            >
                                <p className="text-lg md:text-xl font-bold">{event.title}</p>
                                <p className={`text-base md:text-lg ${event.current ? "text-white" : "text-gray-400"}`}>
                                    {event.date}
                                </p>
                                {event.location.map((line, idxLine) => (
                                    <p key={idxLine} className="text-white">{line}</p>
                                ))}
                            </div>

                            {index < events.length - 1 && (
                                <div
                                    className={`absolute xl:relative bg-gradient-to-r from-blue-500 to-cyan-400 ${"w-1 h-10 xl:h-1 xl:w-20"} xl:top-auto xl:bottom-auto top-full xl:mt-0 mt-2 xl:ml-2 xl:my-auto`}
                                ></div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Career;
