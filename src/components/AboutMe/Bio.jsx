import React from 'react';
import { IoMdDownload } from "react-icons/io";
import CV from '../../assets/files/CV_Pilia.pdf';
import texts from '../../data/texts.json';

const Bio = () => {
    const { intro, alt, future } = texts.bio;

    const highlight = (text) => (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            {text}
        </span>
    );

    const parseText = (text) => {
        return text.split(/(Zoé|23 ans|Développeuse Full‑Stack|janvier 2025|alternance en tant que développeuse front-end junior|Iceberg Data Lab|janvier 2026|Concepteur d'Application JavaScript|15 mois|activement à la recherche d'une nouvelle alternance|3 semaines en entreprise|1 semaine en formation)/g)
            .map((part, index) =>
                [
                    "Zoé",
                    "23 ans",
                    "Développeuse Full‑Stack",
                    "janvier 2025",
                    "alternance en tant que développeuse front-end junior",
                    "Iceberg Data Lab",
                    "janvier 2026",
                    "Concepteur d'Application JavaScript",
                    "15 mois",
                    "activement à la recherche d'une nouvelle alternance",
                    "3 semaines en entreprise",
                    "1 semaine en formation"
                ].includes(part)
                    ? <strong key={index}>{highlight(part)}</strong>
                    : <span key={index}>{part}</span>
            );
    };

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
                À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">moi</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed mb-6 text-center md:text-left">
                {parseText(intro)}
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300 text-center md:text-left">
                {parseText(alt)}
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-300 text-center md:text-left">
                {parseText(future)}
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
                <a
                    href={CV}
                    download="CV_Pilia.pdf"
                    className="cursor-pointer flex justify-between bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-2 md:px-4 md:py-2 rounded-full text-white tracking-wider shadow-xl hover:scale-105 transition-transform duration-500 hover:ring-2 ring-white w-[140px] md:w-[130px] items-center"
                >
                    <span className="text-sm md:text-base">Mon CV</span>
                    <IoMdDownload className="w-4 h-4 md:w-5 md:h-5 animate-bounce ml-2" />
                </a>
            </div>
        </div>
    );
};

export default Bio;
