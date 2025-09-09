import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-500">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <span className="text-sm text-white">© 2025 - All rights reserved</span>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/zoé-pilia-1780161b0" className="text-white hover:text-[#0077B5]" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/zpilia" className="text-white hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/kimlai.2001/" className="text-white hover:text-[#E4405F]" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/zoe_pilia" className="text-white hover:text-[#1DA1F2]" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;