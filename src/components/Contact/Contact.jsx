import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 px-4 sm:px-6 md:px-8 lg:px-24 text-white flex flex-col items-center"
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                Me{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    contacter
                </span>
            </h2>
        </section>
    );
};

export default Contact;
