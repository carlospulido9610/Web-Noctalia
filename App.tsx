import React from 'react';
import { Hero } from './components/Hero';
import { VerificationStrip } from './components/VerificationStrip';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto sm:px-6 pt-6 pb-6 pl-4 pr-4">
      <Hero />
      <VerificationStrip />
      <Services />
      <Testimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;