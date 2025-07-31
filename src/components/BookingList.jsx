// components/BookingList.jsx
import React from 'react';
import { useBookings } from '../context/BookingsContext';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  CardMedia,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const BookingList = () => {
  const { bookings, removeBooking } = useBookings();

  if (bookings.length === 0) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 4 }}>
        No bookings yet.
      </Typography>
    );
  }

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {bookings.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              {pkg.image && (
                <CardMedia
                  component="img"
                  height="160"
                  image={pkg.image}
                  alt={pkg.name}
                />
              )}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {pkg.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  {pkg.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  ₹{pkg.price}
                </Typography>
              </CardContent>
              <IconButton
                onClick={() => removeBooking(pkg.id)}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: 'red',
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookingList;
