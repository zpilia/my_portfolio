import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { FaMapMarkerAlt } from 'react-icons/fa'; // 📍 icône localisation

import 'swiper/css';
import 'swiper/css/effect-cards';

import texts from '../../data/texts.json';

const Experience = () => {
    const { title, jobs } = texts.experience;

    // 🔗 Ouvre la localisation dans un nouvel onglet
    const openMapInNewTab = (mapUrl) => {
        if (!mapUrl) return;
        window.open(mapUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section
            id="experience"
            className="py-16 px-4 flex flex-col items-center text-white"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            <div className="w-full max-w-sm h-[420px]">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-full h-full"
                >
                    {jobs.map((job) => (
                        <SwiperSlide key={job.id}>
                            {job.current ? (
                                // ✅ Carte active avec bordure dégradée
                                <div className="p-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 h-full">
                                    <div className="p-5 rounded-lg bg-gray-800 w-full h-full flex flex-col justify-center items-center text-center gap-y-6">

                                        {/* 🌈 Titre */}
                                        <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 drop-shadow-md">
                                            {job.title}
                                        </h3>

                                        {/* Bloc infos */}
                                        <div className="flex flex-col items-center">
                                            {job.mapUrl ? (
                                                <button
                                                    onClick={() => openMapInNewTab(job.mapUrl)}
                                                    className="flex items-center gap-2 text-cyan-400 font-medium underline hover:text-cyan-100 transition-colors duration-300"
                                                >
                                                    <FaMapMarkerAlt className="text-cyan-400 hover:text-cyan-100 transition-colors duration-300 text-sm" />
                                                    <span>{job.company}</span>
                                                </button>
                                            ) : (
                                                <p className="text-cyan-400 font-medium">{job.company}</p>
                                            )}
                                            <p className="text-sm">{job.location}</p>
                                            <p className="text-xs italic mt-1">{job.period}</p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm whitespace-pre-line text-justify overflow-y-auto max-h-28">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // ❌ Carte normale
                                <div className="p-5 rounded-lg shadow-md bg-gray-800 w-full h-full flex flex-col justify-center items-center text-center gap-y-6">

                                    {/* 🌈 Titre */}
                                    <h3 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2 drop-shadow-md">
                                        {job.title}
                                    </h3>

                                    {/* Bloc infos */}
                                    <div className="flex flex-col items-center">
                                        {job.mapUrl ? (
                                            <button
                                                onClick={() => openMapInNewTab(job.mapUrl)}
                                                className="flex items-center gap-2 text-cyan-400 font-medium underline hover:text-cyan-100 transition-colors duration-300"
                                            >
                                                <FaMapMarkerAlt className="text-cyan-400 hover:text-cyan-100 transition-colors duration-300 text-sm" />
                                                <span>{job.company}</span>
                                            </button>
                                        ) : (
                                            <p className="text-cyan-400 font-medium">{job.company}</p>
                                        )}
                                        <p className="text-sm">{job.location}</p>
                                        <p className="text-xs italic mt-1">{job.period}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm whitespace-pre-line text-justify overflow-y-auto max-h-30">
                                        {job.description}
                                    </p>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Experience;
