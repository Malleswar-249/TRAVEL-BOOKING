import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Paper } from '@mui/material';

import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import TourPackages from './Tours';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/Connect';

export default function Home() {
  const [selectedTab] = useState('Flights');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const aboutEl = document.getElementById('aboutSection');
      if (aboutEl) {
        setTimeout(() => {
          aboutEl.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (location.state?.scrollToContact) {
      const contactEl = document.getElementById('contactSection');
      if (contactEl) {
        setTimeout(() => {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f0f8ff, #e0f7fa)', pb: 8 }}>
      {/* Hero Section */}
      <Hero />

      {/* Booking Tabs & Search Form */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
          <SearchForm selectedTab={selectedTab} />
        </Paper>
      </Container>

      {/* Featured Tour Packages */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <TourPackages />
      </Container>

      {/* About Section */}
      <Box
        id="aboutSection"
        sx={{ backgroundColor: '#ffffff' }}
      >
        <Container>
          <AboutSection />
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contactSection"
        sx={{ backgroundColor: '#f3f4f6' }}
      >
        <Container>
          <Box textAlign="center" mb={0}>
            <Typography variant="h4" fontWeight={700} color="text.primary">
              Connect with Us
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="sm" mx="auto" mt={2}>
              Have questions, suggestions or need support? We're here to help you 24/7.
            </Typography>
          </Box>
          <ContactSection />
        </Container>
      </Box>
    </Box>
  );
}
