import React from "react";
import ProjectCard from "./ProjectCard";
import texts from "../../data/texts.json";

const Projects = () => {
    const { title, items: projects } = texts.projects;

    return (
        <section
            id="projects"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            {/* 🔹 Titre principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
                Mes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            {/* 🔹 Grille responsive */}
            <div
                className="
                    grid
                    gap-8 sm:gap-10 md:gap-12
                    justify-items-center
                    w-full
                    max-w-[90%] sm:max-w-5xl lg:max-w-7xl
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                "
            >
                {projects.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        image={require(`../../assets/img/${proj.image}`)}
                        title={proj.title}
                        description={proj.description}
                        technologies={proj.technologies}
                        status={proj.status}
                        demoLink={proj.demoLink}
                        codeLink={proj.codeLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
