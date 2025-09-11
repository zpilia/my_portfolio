import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSectionSmoothly } from '../Effect/scrollToSectionSmoothly';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const headerRef = useRef(null);

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

    const handleNavLinkClick = (hash) => (e) => {
        e.preventDefault();
        const headerHeight = headerRef.current?.offsetHeight || 0;
        scrollToSectionSmoothly(hash.replace('#', ''), headerHeight, 1000);
        setActiveSection(hash);
        if (isOpen) closeMenu();
    };

    const links = [
        { hash: '#home', label: 'Accueil' },
        { hash: '#aboutme', label: 'À propos de moi' },
        { hash: '#career', label: 'Mon parcours' },
        { hash: '#experience', label: 'Mes expériences' },
        { hash: '#skills', label: 'Mes compétences' },
        { hash: '#projects', label: 'Mes projets' },
        { hash: '#contact', label: 'Me contacter' },
    ];

    return (
        <header ref={headerRef} className="fixed top-0 left-0 w-full z-30 bg-opacity-60">
            <div className="container mx-auto px-5 py-4 flex justify-between items-center">
                {!isOpen && (
                    <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
                        <FaBars />
                    </button>
                )}

                <nav className="hidden lg:flex space-x-8 text-lg font-medium text-white bg-[#BBDEFB] bg-opacity-15 py-4 px-6 rounded-lg w-fit mx-auto">
                    {links.map(({ hash, label }) => (
                        <a
                            key={hash}
                            href={hash}
                            className={linkClasses(hash)}
                            onClick={handleNavLinkClick(hash)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>

            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-60 z-20 pointer-events-none"></div>}

            <nav
                className={`fixed top-0 left-0 w-64 h-full bg-[#BBDEFB] bg-opacity-15 backdrop-blur-md text-white py-6 px-4 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out lg:hidden z-30`}
            >
                <button onClick={closeMenu} className="absolute top-4 right-2 text-3xl text-white">
                    <FaTimes />
                </button>
                <div className="flex flex-col space-y-5 mt-12 text-center">
                    {links.map(({ hash, label }) => (
                        <a
                            key={hash}
                            href={hash}
                            className={linkClasses(hash)}
                            onClick={handleNavLinkClick(hash)}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
