import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

import texts from '../../data/texts.json';

const Experience = () => {
    const { title, jobs } = texts.experience;

    return (
        <section id="experience" className="py-16 px-4 flex flex-col items-center text-white">
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
                                    <div className="p-4 rounded-lg bg-gray-800 w-full h-full flex flex-col justify-between">

                                        {/* Header (Titre en haut) */}
                                        <h3 className="text-lg md:text-xl font-bold text-center mt-2">
                                            {job.title}
                                        </h3>

                                        {/* Infos centrales */}
                                        <div className="flex flex-col items-center justify-center flex-grow text-center">
                                            <p className="text-cyan-400 font-medium">{job.company}</p>
                                            <p className="text-sm">{job.location}</p>
                                            <p className="text-xs italic mt-1">{job.period}</p>
                                        </div>

                                        {/* Description en bas */}
                                        <p className="text-sm mt-2 whitespace-pre-line text-justify overflow-y-auto max-h-24">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // ❌ Cartes normales
                                <div className="p-4 rounded-lg shadow-md bg-gray-800 w-full h-full flex flex-col justify-between">

                                    {/* Header (Titre en haut) */}
                                    <h3 className="text-lg md:text-xl font-bold text-center mt-2">
                                        {job.title}
                                    </h3>

                                    {/* Infos centrales */}
                                    <div className="flex flex-col items-center justify-center flex-grow text-center">
                                        <p className="text-cyan-400 font-medium">{job.company}</p>
                                        <p className="text-sm">{job.location}</p>
                                        <p className="text-xs italic mt-1">{job.period}</p>
                                    </div>

                                    {/* Description en bas */}
                                    <p className="text-sm mt-2 whitespace-pre-line text-justify overflow-y-auto max-h-24">
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
