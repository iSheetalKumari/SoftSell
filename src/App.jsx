import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

