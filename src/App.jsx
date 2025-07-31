import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Navbar from './components/Navbar';
import { BookingsProvider } from './context/BookingsContext';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import Login from './pages/Login';
import TourPackages from './pages/Tours';
import Payment from './pages/payment';
import Bookings from './pages/Bookings';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BookingsProvider>
        <CssBaseline />
        <Router>
          <Navbar />
          <main
            style={{
              marginTop: '0px',
              minHeight: 'calc(100vh - 80px)',
              backgroundColor: '#f4f6f8',
              paddingBottom: '4rem',
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                paddingX: { xs: 1, sm:0 },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/login" element={<Login />} />
                <Route path="/packages" element={<TourPackages />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/Payment" element={<Payment />} />
              </Routes>
            </Container>
          </main>
        </Router>
      </BookingsProvider>
    </LocalizationProvider>
  );
}

export default App;