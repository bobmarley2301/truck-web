import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="p-16 bg-gray-900 text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-10">Contact Us</h2>
            <form className="flex flex-col items-center">
                <input className="mb-4 p-3 w-96 border border-gray-700 bg-gray-800 text-gray-100" type="text" placeholder="Your Name" />
                <input className="mb-4 p-3 w-96 border border-gray-700 bg-gray-800 text-gray-100" type="email" placeholder="Your Email" />
                <textarea className="mb-4 p-3 w-96 h-40 border border-gray-700 bg-gray-800 text-gray-100" placeholder="Your Message" />
                <button className="bg-gray-700 hover:bg-gray-600 text-gray-100 p-3 mt-4">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
