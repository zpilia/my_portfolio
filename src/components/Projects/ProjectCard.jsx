import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ image, title, description, technologies, status, codeLink, demoLink }) => {
    return (
        <div
            className="
                relative
                bg-gray-800 bg-opacity-90 border border-gray-700 rounded-2xl shadow-lg
                overflow-hidden transition-transform transform hover:scale-[1.03]
                hover:shadow-2xl duration-300
                w-full
                max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                h-auto
                flex flex-col
            "
        >
            {/* 🖼️ Image du projet */}
            <div className="w-full h-40 sm:h-52 md:h-60 lg:h-64 xl:h-72 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* 📄 Contenu du projet */}
            <div className="p-4 sm:p-6 md:p-7 flex flex-col justify-between flex-1">
                {/* 🔹 Titre et statut */}
                <div className="flex justify-between items-center mb-3">
                    <h3
                        className="
                            text-base sm:text-lg md:text-xl lg:text-2xl
                            font-semibold text-transparent bg-clip-text
                            bg-gradient-to-r from-blue-400 to-cyan-300
                        "
                    >
                        {title}
                    </h3>
                    <span
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full font-semibold ${
                            status?.toLowerCase() === "completed"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                        {status}
                    </span>
                </div>

                {/* 📝 Description */}
                <p
                    className="
                        text-gray-300
                        text-xs sm:text-sm md:text-base
                        mb-4 leading-relaxed
                        line-clamp-4 sm:line-clamp-5 md:line-clamp-6
                    "
                >
                    {description}
                </p>

                {/* ⚙️ Technologies */}
                {technologies && technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="
                                    bg-gray-700 text-cyan-300
                                    text-[10px] sm:text-xs md:text-sm
                                    px-2 sm:px-3 py-0.5 sm:py-1
                                    rounded-full border border-cyan-400/30
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* 🔗 Boutons */}
                <div className="flex justify-between mt-auto gap-3 sm:gap-4">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center justify-center gap-1 sm:gap-2
                                bg-gradient-to-r from-blue-500 to-cyan-400
                                text-white font-medium
                                text-xs sm:text-sm md:text-base
                                px-3 sm:px-4 py-1.5 sm:py-2
                                rounded-lg hover:opacity-90
                                transition-all duration-200 w-1/2
                            "
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                    {codeLink && (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center justify-center gap-1 sm:gap-2
                                bg-transparent border border-cyan-400 text-cyan-300
                                font-medium text-xs sm:text-sm md:text-base
                                px-3 sm:px-4 py-1.5 sm:py-2
                                rounded-lg hover:bg-cyan-400/10
                                transition-all duration-200 w-1/2
                            "
                        >
                            <FaGithub /> Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
