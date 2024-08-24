import React from 'react';

const HeroSection = () => {
    return (
        <section
            className="bg-cover bg-center text-center p-16 md:p-32 min-h-screen flex flex-col justify-center relative"
            style={{ backgroundImage: "url('/images/truck-hero.jpg')" }} // Зображення трака
        >
            <div className="absolute inset-0 bg-gray-800 opacity-70"></div> {/* Темний сірий оверлей */}
            <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-100">Your Reliable Logistics Partner</h1>
                <p className="mt-8 text-xl md:text-2xl text-gray-200">Efficient, reliable, and trustworthy logistics services for your business.</p>
            </div>
        </section>
    );
};

export default HeroSection;
