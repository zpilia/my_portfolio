import React from 'react';
import texts from '../../data/texts.json';

const getDiplomaStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now < start) return 'upcoming';
    if (now >= start && now <= end) return 'current';
    return 'past';
};

const formatDateRange = (startDate, endDate) => {
    const options = { year: 'numeric', month: 'short' };
    const start = new Date(startDate).toLocaleDateString('fr-FR', options);
    const end = new Date(endDate).toLocaleDateString('fr-FR', options);
    return `${start} – ${end}`;
};

const Career = () => {
    const { title, events } = texts.career;

    const eventsWithStatus = events.map((ev) => ({
        ...ev,
        status: getDiplomaStatus(ev.startDate, ev.endDate),
        formattedDate: formatDateRange(ev.startDate, ev.endDate),
    }));

    const openMapInNewTab = (mapUrl) => {
        if (mapUrl) window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="career"
            className="h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-24 py-12 text-white"
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
                {title.split(/(parcours)/gi).map((part, index) =>
                    part.toLowerCase() === 'parcours' ? (
                        <span
                            key={index}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
                        >
                            {part}
                        </span>
                    ) : (
                        <span key={index}>{part}</span>
                    )
                )}
            </h1>

            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full max-w-6xl gap-8">
                {eventsWithStatus.map((ev, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center relative w-full sm:w-auto"
                    >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-2">
                            <span className="text-sm font-bold">{idx + 1}</span>
                        </div>

                        <div
                            className={`p-4 rounded-lg shadow-md w-full max-w-xs sm:w-60 md:w-72 border transition-all duration-300 ${
                                ev.status === 'current'
                                    ? 'bg-blue-500 bg-opacity-40 border-blue-300'
                                    : 'bg-gray-800 bg-opacity-80 border-cyan-400/30 hover:border-cyan-300'
                            }`}
                        >
                            <p className="text-lg md:text-xl font-bold">{ev.title}</p>
                            <p className="text-base md:text-lg">{ev.formattedDate}</p>

                            {ev.location.map((line, i) =>
                                i === 0 && ev.mapUrl ? (
                                    <p
                                        key={i}
                                        className="text-white underline hover:cursor-pointer hover:text-cyan-400"
                                        onClick={() => openMapInNewTab(ev.mapUrl)}
                                    >
                                        {line}
                                    </p>
                                ) : (
                                    <p key={i} className="text-white">
                                        {line}
                                    </p>
                                )
                            )}
                        </div>

                        {idx < events.length - 1 && (
                            <div className="absolute lg:relative bg-gradient-to-r from-blue-500 to-cyan-400 w-1 h-10 lg:h-1 lg:w-20 top-full mt-2 lg:mt-0 lg:ml-2"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Career;
