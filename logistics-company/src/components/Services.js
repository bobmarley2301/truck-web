import React from 'react';
import { FaTruck, FaWarehouse, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
    return (
        <section id="services" className="px-16 py-20 bg-gray-900 text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-10">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-8 bg-gray-800 h-96 flex flex-col items-center">
                    <FaTruck className="text-5xl text-gray-400 mb-6" /> {/* Icon */}
                    <h3 className="text-2xl font-bold text-gray-100">Freight Forwarding</h3>
                    <p className="mt-4 text-gray-300">We manage the entire supply chain, ensuring timely delivery.</p>
                </div>
                <div className="p-8 bg-gray-800 h-96 flex flex-col items-center">
                    <FaWarehouse className="text-5xl text-gray-400 mb-6" /> {/* Icon */}
                    <h3 className="text-2xl font-bold text-gray-100">Warehousing</h3>
                    <p className="mt-4 text-gray-300">Secure storage solutions tailored to your needs.</p>
                </div>
                <div className="p-8 bg-gray-800 h-96 flex flex-col items-center">
                    <FaShieldAlt className="text-5xl text-gray-400 mb-6" /> {/* Icon */}
                    <h3 className="text-2xl font-bold text-gray-100">Customs Brokerage</h3>
                    <p className="mt-4 text-gray-300">Simplifying the customs process for smooth international trade.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
