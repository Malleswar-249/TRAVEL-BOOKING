import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      id="aboutSection"
      sx={{
        paddingY: { xs: 6, sm: 10 },
        backgroundColor: '#fff',
        scrollMarginTop: '80px' 
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          About Us



          
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Primroute is your go-to platform for discovering amazing destinations,
          booking unforgettable trips, and exploring holiday packages tailored
          to your taste. Whether you dream of Paris or the Maldives, we've got
          the perfect experience lined up.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
