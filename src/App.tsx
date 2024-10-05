import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQPage from './pages/Faq';
import Contact from './pages/Contact';
import Subservice from './pages/Subservice';
import Privacy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';
import Navbar from './components/navbar';
import PreFooter from './components/pre-footer';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <div className='max-w-[100vw] overflow-hidden relative'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<Subservice />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PreFooter/>
      <Footer/>
      </div>
      </BrowserRouter>
    </>
  );
};

export default App;