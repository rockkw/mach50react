import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Menu from './components/Menu'; // Adjust path if necessary


function App() {
  return (
    <div>
      
      <Header />
      <AboutSection />
      <Menu />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
