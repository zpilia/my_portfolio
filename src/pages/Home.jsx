import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import backgroundVideo from '../assets/video/background_portfolio.mp4';
import TextReveal from "../components/Effect/TextReveal";
import { FaChevronDown } from 'react-icons/fa';
import AboutMe from "../components/AboutMe/AboutMe";
import Career from "../components/Career/Career";

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

            <div className="relative z-10">
                <Header />
                <main>
                    <section id="home" className="flex flex-col items-center justify-center h-screen px-4 md:px-8">
                        <TextReveal />

                        <a href="#aboutme" className="mt-8 animate-bounce">
                            <FaChevronDown className="text-white text-3xl" />
                        </a>
                    </section>

                    <AboutMe />

                    <Career />

                    <section id="experience" className="py-16 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Mes expériences professionnelles</h2>
                    </section>
                    <section id="skills" className="py-16 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Mes compétences</h2>
                    </section>
                    <section id="projects" className="py-16 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Mes projets réalisés</h2>
                    </section>
                    <section id="contact" className="py-16 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Me contacter</h2>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;