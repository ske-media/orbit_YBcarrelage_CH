import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import CustomCreations from './components/CustomCreations';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import Partners from './components/Partners.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Legal from './components/Legal.tsx';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      {window.location.pathname === '/legal' ? (
        <Legal />
      ) : (
        <>
          <Hero />
          <About />
          <Portfolio />
          <BeforeAfter />
          <Services />
          <CustomCreations />
          <Partners />
          <Testimonials />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );

}
export default App;