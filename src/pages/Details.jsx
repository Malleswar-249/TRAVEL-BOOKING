import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Grid,
  Paper,
  TextField,
  Button
} from '@mui/material';

export default function Details() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/trips/${id}`)
      .then(res => res.json())
      .then(data => {
        setTrip(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch trip:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!trip) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h5">Trip not found.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {trip.title}
      </Typography>


      <Box mt={4}>
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {trip.description || 'No description available.'}
        </Typography>
      </Box>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Book This Trip
            </Typography>
            <TextField fullWidth label="Full Name" margin="normal" />
            <TextField fullWidth label="Email" type="email" margin="normal" />
            <TextField fullWidth label="No. of Travelers" type="number" margin="normal" />
            <Button fullWidth variant="contained" sx={{ mt: 2 }}>
              Book Now
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Travel Policies
            </Typography>
            <ul>
              <li>Free cancellation within 48 hours</li>
              <li>Full refund up to 7 days before trip</li>
              <li>Travel insurance recommended</li>
              <li>Government-issued ID required</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}