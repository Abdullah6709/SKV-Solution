import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutService from './components/AboutService.jsx';
import ProcessTimeline from './components/ProcessTimeline.jsx';
import FaqSection from './components/FaqSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f8fafc' }}>
      {/* Main Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <AboutService />
        <ProcessTimeline />
        <FaqSection />
        <ContactSection />
      </Box>

      {/* Footer */}
      <Footer />

      {/* Floating Speed-Dial Quick Contact Buttons */}
      <FloatingActions />
    </Box>
  );
}

export default App;
