import React from 'react';

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            {/* 🔹 Titre principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                Mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    projets réalisés
                </span>
            </h2>

            {/* 🔹 Contenu à venir */}
            <p className="text-gray-300 text-center max-w-2xl">
                Cette section présentera prochainement une sélection de mes projets web les plus marquants,
                avec une mise en avant du design, des fonctionnalités et des technologies utilisées.
            </p>
        </section>
    );
};

export default Projects;
