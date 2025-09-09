import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const handleHashChange = () => setActiveSection(window.location.hash);
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const linkClasses = (hash) =>
        `hover:underline underline-offset-4 decoration-white transition duration-300 ${
            activeSection === hash ? 'text-blue-400 font-semibold' : ''
        }`;

    return (
        <header className="fixed top-0 left-0 w-full z-30 bg-opacity-60">
            <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                {/* Bouton hamburger (mobile) */}
                {!isOpen && (
                    <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
                        <FaBars />
                    </button>
                )}

                {/* Menu Desktop */}
                <nav className="hidden lg:flex space-x-8 text-lg font-medium text-white bg-[#BBDEFB] bg-opacity-15 py-4 px-6 rounded-lg w-fit mx-auto">
                    <a href="#home" className={linkClasses('#home')}>Accueil</a>
                    <a href="#aboutme" className={linkClasses('#aboutme')}>À propos de moi</a>
                    <a href="#career" className={linkClasses('#career')}>Mon parcours</a>
                    <a href="#experience" className={linkClasses('#experience')}>Mes expériences</a>
                    <a href="#skills" className={linkClasses('#skills')}>Mes compétences</a>
                    <a href="#projects" className={linkClasses('#projects')}>Mes projets</a>
                    <a href="#contact" className={linkClasses('#contact')}>Me contacter</a>
                </nav>
            </div>

            {/* Overlay non cliquable (mobile uniquement) */}
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-60 z-20 pointer-events-none"></div>}

            {/* Menu Mobile */}
            <nav className={`fixed top-0 left-0 w-64 h-full bg-[#BBDEFB] bg-opacity-15 backdrop-blur-md text-white py-6 px-4 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out lg:hidden z-30`}>
                <button onClick={closeMenu} className="absolute top-4 right-2 text-3xl text-white">
                    <FaTimes />
                </button>
                <div className="flex flex-col space-y-5 mt-12 text-center">
                    <a href="#home" className={linkClasses('#home')} onClick={closeMenu}>Accueil</a>
                    <a href="#aboutme" className={linkClasses('#aboutme')} onClick={closeMenu}>À propos de moi</a>
                    <a href="#career" className={linkClasses('#career')} onClick={closeMenu}>Mon parcours</a>
                    <a href="#experience" className={linkClasses('#experience')} onClick={closeMenu}>Mes expériences</a>
                    <a href="#skills" className={linkClasses('#skills')} onClick={closeMenu}>Mes compétences</a>
                    <a href="#projects" className={linkClasses('#projects')} onClick={closeMenu}>Mes projets</a>
                    <a href="#contact" className={linkClasses('#contact')} onClick={closeMenu}>Me contacter</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
