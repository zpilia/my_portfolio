import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import texts from '../../data/texts.json';

const Experience = () => {
    const { title, jobs } = texts.experience;

    return (
        <section id="experience" className="py-16 px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            <div className="w-full max-w-sm h-96">
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-full h-full"
                >
                    {jobs.map((job) => (
                        <SwiperSlide key={job.id}>
                            <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl w-full h-full flex flex-col justify-center items-center text-center">
                                <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                                <p className="text-cyan-400 font-medium">{job.company}</p>
                                <p className="text-sm mt-1">{job.location}</p>
                                <p className="text-xs mt-1 italic">{job.period}</p>
                                <p className="text-sm mt-4 whitespace-pre-line">{job.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Experience;
