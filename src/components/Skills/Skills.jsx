import React from 'react';
import texts from '../../data/texts.json';

const Skills = () => {
    const { title, categories } = texts.skills;

    return (
        <section
            id="skills"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title}
                </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl">
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            {category.type}
                        </h3>

                        <ul className="flex flex-wrap gap-4 justify-start">
                            {category.items.map((skill, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-3 bg-gray-700 bg-opacity-70 px-4 py-2.5 rounded-full text-base transition-all duration-300 border border-transparent hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.5)] hover:bg-gray-700/90"
                                >
                                    {skill.icon && (
                                        <img
                                            src={require(`../../assets/img/icons/${skill.icon}`)}
                                            alt={skill.name}
                                            className="w-6 h-6 md:w-7 md:h-7 object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                    <span className="font-medium">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
