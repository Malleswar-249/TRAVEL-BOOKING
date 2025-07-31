import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', px: 2, py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="text.primary">
            Contact Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>📞 Phone:</strong> +91 xxxxxxxx88
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>📧 Email:</strong> support@primroute.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>🏢 Address:</strong> 123 Travel Plaza, Bengaluru, India
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom fontWeight="bold" color="text.primary">
            🕒 24/7 Customer Service
          </Typography>
          <Typography variant="body1">
            Our team is available around the clock to assist you with your travel plans.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
