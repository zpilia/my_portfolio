import React from 'react';
import englishFlag from '../../assets/img/england.svg';
import spanishFlag from '../../assets/img/spain.svg';

const Languages = () => {
    return (
        <div className="p-6 sm:p-8 rounded-lg text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Langues
                </span> parlées
            </h1>

            {/* Affichage en colonne sur mobile et en ligne sur tablette+ */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:space-x-12">

                {/* Anglais */}
                <div className="flex flex-row items-center space-x-2">
                    <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        B1
                    </h1>
                    <img src={englishFlag} alt="Drapeau anglais" className="w-10 h-10 sm:w-14 sm:h-14" />
                </div>

                {/* Séparateur vertical uniquement en mode ligne */}
                <div className="hidden sm:block h-14 border-l-2 border-gray-400 mx-6 sm:mx-10"></div>

                {/* Espagnol */}
                <div className="flex flex-row items-center space-x-2">
                    <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        A2
                    </h1>
                    <img src={spanishFlag} alt="Drapeau espagnol" className="w-10 h-10 sm:w-14 sm:h-14" />
                </div>
            </div>
        </div>
    );
};

export default Languages;
