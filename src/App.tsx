import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// 컴포넌트 import
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import Members from './pages/Members';
import ActivityGallery from './pages/ActivityGallery';
import ClubRoom from './pages/ClubRoom';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/members" element={<Members />} />
            <Route path="/activity-gallery" element={<ActivityGallery />} />
            <Route path="/clubroom" element={<ClubRoom />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 