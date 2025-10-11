import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { FaClock } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-cards';
import texts from '../../data/texts.json';

const getExperienceDuration = (startDate, endDate) => {
    if (!startDate) return '';
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearsText = years > 0 ? `${years} an${years > 1 ? 's' : ''}` : '';
    const monthsText = months > 0 ? `${months} mois` : '';

    if (yearsText && monthsText) return `${yearsText} et ${monthsText}`;
    if (yearsText) return yearsText;
    if (monthsText) return monthsText;
    return 'Moins d’un mois';
};

const Experience = () => {
    const { title, jobs } = texts.experience;

    const openMapInNewTab = (mapUrl) => {
        if (!mapUrl) return;
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="experience" className="py-16 px-4 flex flex-col items-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] h-[380px] sm:h-[420px] md:h-[450px] lg:h-[480px]">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-full h-full"
                >
                    {jobs.map((job) => {
                        const duration = getExperienceDuration(job.startDate, job.endDate);

                        return (
                            <SwiperSlide key={job.id}>
                                {job.current ? (
                                    <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 h-full">
                                        <div className="p-5 rounded-lg bg-gray-800 w-full h-full flex flex-col justify-center items-center text-center gap-y-6">

                                            <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 drop-shadow-md">
                                                {job.title}
                                            </h3>

                                            <div className="flex flex-col items-center">
                                                {job.mapUrl ? (
                                                    <button
                                                        onClick={() => openMapInNewTab(job.mapUrl)}
                                                        className="text-cyan-400 font-medium underline hover:text-cyan-200 transition-colors duration-300"
                                                    >
                                                        {job.company}
                                                    </button>
                                                ) : (
                                                    <p className="text-cyan-400 font-medium">{job.company}</p>
                                                )}
                                                <p className="text-sm">{job.location}</p>
                                                <p className="text-xs italic mt-1">{job.period}</p>

                                                <div className="flex items-center gap-1 mt-1 text-gray-300 text-xs">
                                                    <FaClock className="text-cyan-400" />
                                                    <span>{duration}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm whitespace-pre-line text-justify overflow-y-auto max-h-28">
                                                {job.description}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-5 rounded-lg shadow-md bg-gray-800 w-full h-full flex flex-col justify-center items-center text-center gap-y-6">

                                        <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 drop-shadow-md">
                                            {job.title}
                                        </h3>

                                        <div className="flex flex-col items-center">
                                            {job.mapUrl ? (
                                                <button
                                                    onClick={() => openMapInNewTab(job.mapUrl)}
                                                    className="text-cyan-400 font-medium underline hover:text-cyan-200 transition-colors duration-300"
                                                >
                                                    {job.company}
                                                </button>
                                            ) : (
                                                <p className="text-cyan-400 font-medium">{job.company}</p>
                                            )}
                                            <p className="text-sm">{job.location}</p>
                                            <p className="text-xs italic mt-1">{job.period}</p>

                                            <div className="flex items-center gap-1 mt-1 text-gray-300 text-xs">
                                                <FaClock className="text-cyan-400" />
                                                <span>{duration}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm whitespace-pre-line text-justify overflow-y-auto max-h-30">
                                            {job.description}
                                        </p>
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Experience;
