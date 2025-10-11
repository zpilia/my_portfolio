import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import texts from '../../data/texts.json';

const Skills = () => {
    const { title, categories } = texts.skills;

    return (
        <section
            id="skills"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            {/* 🔹 Titre principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                Mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            {/* 🔹 Swiper Cube responsive */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl
                            h-[400px] sm:h-[500px] md:h-[580px] lg:h-[640px] xl:h-[700px] mt-4">
                <Swiper
                    effect="cube"
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 30,
                        shadowScale: 0.9,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper w-full h-full"
                >
                    {categories.map((category, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-gray-800 bg-opacity-90 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-700
                                            flex flex-col justify-between items-center text-center h-full transition-transform duration-300">

                                {/* 🧭 Titre en haut */}
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2 sm:mt-4">
                                    {category.type}
                                </h3>

                                {/* 🧩 Liste des compétences */}
                                <div className="flex flex-1 items-center justify-center w-full">
                                    <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 w-full max-w-[90%] md:max-w-xl">
                                        {category.items.map((skill, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2 sm:gap-3
                                                           bg-gray-700 bg-opacity-70
                                                           px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-3
                                                           rounded-full
                                                           text-xs sm:text-sm md:text-base lg:text-lg
                                                           border border-transparent
                                                           hover:border-cyan-400 hover:bg-gray-700/80
                                                           transition-all duration-300"
                                            >
                                                {skill.icon && (
                                                    <img
                                                        src={require(`../../assets/img/icons/${skill.icon}`)}
                                                        alt={skill.name}
                                                        className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
                                                    />
                                                )}
                                                <span className="font-medium">{skill.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Skills;
