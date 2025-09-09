import React from 'react';
import { IoMdDownload } from "react-icons/io";
import CV from '../../assets/files/CV_Pilia.pdf';

const Bio = () => {
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">moi</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
                Bonjour ! Je m'appelle <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Zoé</strong> et j'ai <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">23 ans</strong>.
                Je suis actuellement en formation d'intégrateur-développeur Web à la
                Web@cademie de Lille afin d'atteindre mon objectif : <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Développeuse Full-Stack</strong>.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300 text-center md:text-left">
                Je suis activement à la recherche d'une <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">alternance en développement Web</strong>, à partir
                d'aujourd'hui jusqu'à <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">novembre 2025</strong>, avec un engagement de <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">3 semaines en entreprise</strong> et
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> 1 semaine à l'école</strong>.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
                <a
                    href={CV}
                    download="CV_Pilia.pdf"
                    className="cursor-pointer flex justify-between bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-2 md:px-4 md:py-2 rounded-full text-white tracking-wider shadow-xl hover:scale-105 duration-500 hover:ring-2 ring-white w-[140px] md:w-[130px] items-center"
                >
                    <span className="text-sm md:text-base">Mon CV</span>
                    <IoMdDownload className="w-4 h-4 md:w-5 md:h-5 animate-bounce ml-2" />
                </a>
            </div>
        </div>
    );
};

export default Bio;