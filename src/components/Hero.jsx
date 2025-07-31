import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const backgroundImage = 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Hero = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        m: 0,
        p: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          py: { xs: 6, md: 8 },
          px: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              color: '#fff',
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: '1000px',
              mx: 'auto',
            }}
          >
            <Typography
              variant={isMdUp ? 'h2' : 'h3'}
              fontWeight={800}
              gutterBottom
            >
              Explore World <br /> With Us.
            </Typography>

            <Typography variant="h6" sx={{ mb: 3 }}>
              Explore top holiday packages, trending places, and exclusive travel deals.
            </Typography>

            <List disablePadding>
              {[
                'Curated Travel Experiences',
                'Exclusive Holiday Packages',
                '24/7 Travel Assistance',
                'Special discounts on selected debit/credit cards',
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ color: 'violet', minWidth: '30px' }}>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} primaryTypographyProps={{ fontSize: isMdUp ? '1.2rem' : '1rem' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
