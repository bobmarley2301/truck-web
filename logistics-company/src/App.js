import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
