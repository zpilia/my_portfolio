import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import defaultImage from "../../assets/img/default-project.png";

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const cachedData = localStorage.getItem("github_repos_with_topics");
                if (cachedData) {
                    setRepos(JSON.parse(cachedData));
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://api.github.com/users/zpilia/repos");
                const data = await response.json();

                const enrichedRepos = await Promise.all(
                    data
                        .filter(repo => !repo.fork && !repo.private)
                        .map(async (repo) => {
                            try {
                                const topicsResponse = await fetch(
                                    `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
                                    {
                                        headers: {
                                            Accept: "application/vnd.github.mercy-preview+json",
                                        },
                                    }
                                );
                                const topicsData = await topicsResponse.json();

                                return {
                                    title: repo.name,
                                    description: repo.description || "Aucune description disponible.",
                                    technologies: topicsData.names || [],
                                    image: `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/assets/preview.png`,
                                    demoLink: repo.homepage || null,
                                    codeLink: repo.html_url,
                                };
                            } catch (error) {
                                console.warn(`Impossible de charger les topics pour ${repo.name}`);
                                return {
                                    title: repo.name,
                                    description: repo.description || "Aucune description disponible.",
                                    technologies: [],
                                    image: `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/assets/preview.png`,
                                    demoLink: repo.homepage || null,
                                    codeLink: repo.html_url,
                                };
                            }
                        })
                );

                setRepos(enrichedRepos);
                localStorage.setItem("github_repos_with_topics", JSON.stringify(enrichedRepos));
            } catch (error) {
                console.error("Erreur lors du chargement des dépôts GitHub :", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section
            id="projects"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
                Mes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    projets GitHub publics
                </span>
            </h2>

            {loading ? (
                <p className="text-gray-400 text-center">Chargement des projets...</p>
            ) : repos.length > 0 ? (
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
                    {repos.map((proj, idx) => (
                        <ProjectCard
                            key={idx}
                            image={proj.image || defaultImage}
                            fallbackImage={defaultImage}
                            title={proj.title}
                            description={proj.description}
                            technologies={proj.technologies}
                            demoLink={proj.demoLink}
                            codeLink={proj.codeLink}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-gray-400 text-center">
                    Aucun projet public trouvé sur ton profil GitHub.
                </p>
            )}
        </section>
    );
};

export default Projects;
