import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import texts from '../../data/texts.json';

const Contact = () => {
    const { title, email, phone, location } = texts.contact;
    const formRef = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSuccess(true);
                    setStatusMessage(
                        "✅ Votre message a bien été envoyé ! Je vous recontacterai dans les plus brefs délais."
                    );
                    e.target.reset();

                    setTimeout(() => {
                        setStatusMessage('');
                        setIsSuccess(false);
                    }, 7000);
                },
                (error) => {
                    console.error('Erreur EmailJS:', error);
                    setIsSuccess(false);
                    setStatusMessage(
                        "❌ Une erreur est survenue. Veuillez réessayer plus tard."
                    );
                }
            );
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white flex flex-col items-center"
        >
            {/* 🔹 Titre principal */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
                {title.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    {title.split(' ')[1]}
                </span>
            </h2>

            {/* 🔹 Conteneur principal */}
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 max-w-6xl">

                {/* 🧾 Formulaire de contact */}
                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6 bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg w-full lg:w-1/2 border border-gray-700"
                >
                    <div className="flex flex-col">
                        <label htmlFor="company" className="text-sm font-medium mb-2 text-cyan-300">Nom de l’entreprise</label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Nom de votre entreprise"
                            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-cyan-400 outline-none text-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium mb-2 text-cyan-300">Votre nom</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Prénom et/ou Nom"
                            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-cyan-400 outline-none text-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-2 text-cyan-300">Email professionnel</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="exemple@entreprise.com"
                            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-cyan-400 outline-none text-white"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-sm font-medium mb-2 text-cyan-300">Sujet</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            placeholder="Objet de votre message"
                            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-cyan-400 outline-none text-white"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-medium mb-2 text-cyan-300">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Votre message..."
                            className="p-3 rounded-lg bg-gray-900 border border-gray-600 focus:border-cyan-400 outline-none text-white resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                    >
                        Envoyer le message
                    </button>

                    {statusMessage && (
                        <p
                            className={`text-center mt-4 text-sm font-medium transition-opacity duration-300 ${
                                isSuccess ? 'text-cyan-300' : 'text-red-400'
                            }`}
                        >
                            {statusMessage}
                        </p>
                    )}
                </form>

                {/* 📍 Infos & Carte */}
                <div className="flex flex-col gap-6 w-full lg:w-1/2 bg-gray-800 bg-opacity-80 p-8 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Mes informations</h3>

                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-cyan-400 text-xl" />
                        <a href={`mailto:${email}`} className="hover:text-cyan-300 transition-colors">
                            {email}
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-cyan-400 text-xl" />
                        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-cyan-300 transition-colors">
                            {phone}
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                        <p>{location}</p>
                    </div>

                    <div className="w-full h-64 mt-4 rounded-lg overflow-hidden border border-gray-700 shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41543.019518881!2d2.813465152932127!3d49.4006085309626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7d5e621cbedd7%3A0x40af13e81644610!2s60200%20Compi%C3%A8gne!5e0!3m2!1sfr!2sfr!4v1760270459518!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localisation - Compiègne"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
