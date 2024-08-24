import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-gray-100 p-4 md:p-6">
            <nav className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-xl md:text-2xl font-bold mb-2 md:mb-0">Logistics Co.</div>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <li><a href="#services" className="hover:text-gray-400">Services</a></li>
                    <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
                    <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
