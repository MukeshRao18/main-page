import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateRegistration from './Components/CandidateRegistration';
import SearchCandidates from './Components/SearchCandidates';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

const Content = () => {
  return (
    <Router>
      <div className='bg-gray-50'>
        <Navbar />
        <div className=""> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CandidateRegistration" element={<CandidateRegistration />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/SearchCandidates" element={<SearchCandidates />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default Content;