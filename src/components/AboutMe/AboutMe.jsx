import React from 'react';
import Bio from './Bio';
import ProfilePicture from './ProfilePicture';
import Languages from './Languages';
import Hobbies from './Hobbies';

const AboutMe = () => {
    return (
        <section id="aboutme" className="min-h-screen flex flex-col items-center px-6 sm:px-8 lg:px-24 py-12 text-white">

            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mb-12 lg:mb-16 space-y-8 lg:space-y-0">
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                    <ProfilePicture />
                </div>

                <div className="w-full lg:w-1/2">
                    <Bio />
                </div>
            </div>

            <div className="w-full flex flex-col space-y-12 mt-5">
                <div className="w-full">
                    <Languages />
                </div>
                <div className="w-full">
                    <Hobbies />
                </div>
            </div>

        </section>
    );
};

export default AboutMe;