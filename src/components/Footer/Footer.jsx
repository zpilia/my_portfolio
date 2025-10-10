import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const iconData = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-6 h-6" />,
            href: 'https://www.linkedin.com/in/zoé-pilia-1780161b0',
            hoverColor: '#0077B5'
        },
        {
            name: 'GitHub',
            icon: <FaGithub className="w-6 h-6" />,
            href: 'https://github.com/zpilia',
            hoverColor: '#9CA3AF'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram className="w-6 h-6" />,
            href: 'https://www.instagram.com/kimlai.2001/',
            hoverColor: '#E4405F'
        },
        {
            name: 'X (Twitter)',
            icon: <FaTwitter className="w-6 h-6" />,
            href: 'https://x.com/zoe_pilia',
            hoverColor: '#1DA1F2'
        }
    ];

    return (
        <footer className="border-t-2 border-gray-500">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <span className="text-sm text-white">© {currentYear} - All rights reserved</span>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    {iconData.map(({ name, icon, href, hoverColor }) => (
                        <div key={name} className="group relative inline-block">
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition-transform duration-300 group-hover:scale-125"
                                style={{ color: 'white' }}
                                onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                            >
                                {icon}
                            </a>
                            <span
                                className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 px-2 py-1 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                            >
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
